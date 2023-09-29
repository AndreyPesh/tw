import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import CloudAPI from '@/src/6_shared/api/helpers/cloud/CloudAPI';
import CloudinaryAPI from '@/src/6_shared/api/helpers/cloud/cloudinary/CloudinaryAPI';
import { STATUS_CODE } from '@/src/6_shared/api/types/enums';
import { UserDB } from '@/src/6_shared/api/helpers/db/user/User';
import { authOptions } from '@/src/1_app/auth/auth';

const cloudAPI = new CloudAPI(new CloudinaryAPI());
const userDB = new UserDB();

const setImageRequest = async (request: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({
        status: STATUS_CODE.UNAUTHORIZED,
      });
    }
    const { user } = session;
    const formData = await request.formData();

    if (user && user.email) {
      const userData = await userDB.getUser(user.email);
      userData?.image && (await cloudAPI.removeImageFromCloud(userData.image));
    }
    const responseCloud = await cloudAPI.uploadImageToCloud(formData);

    if (responseCloud.status === STATUS_CODE.OK) {
      const urlImage = responseCloud.data as string;
      if (user && user.email) {
        const newUrlImage = await userDB.updateImageDb(urlImage, user.email);
        if (!newUrlImage) {
          throw new Error();
        }
        return NextResponse.json({
          status: STATUS_CODE.OK,
          data: { usrImage: newUrlImage },
        });
      }
    } else {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

const removeImage = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({
        status: STATUS_CODE.UNAUTHORIZED,
      });
    }
    const { user } = session;

    if (user && user.image && user.email) {
      const userData = await userDB.getUser(user.email);
      if (userData && userData.image) {
        await cloudAPI.removeImageFromCloud(userData.image);
      }
      await userDB.deleteImage(user.email);
      return NextResponse.json({
        status: STATUS_CODE.OK,
      });
    }
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: (error as Error).message,
    });
  }
};

export { setImageRequest as POST, removeImage as DELETE };
