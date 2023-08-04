import { sendFileToCloud } from '@/src/5_shared/api/helpers/cloud/cloudRequest';
import { updateImageDb } from '@/src/5_shared/api/helpers/user/account';
import { GENERAL_MESSAGE_ERROR } from '@/src/5_shared/api/types/constants';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';
import { ResponseSuccess } from '@/src/5_shared/api/types/interfaces';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

const setImageRequest = async (request: NextRequest, res: NextResponse) => {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({
        status: STATUS_CODE.UNAUTHORIZED,
      });
    }
    const { user } = session;

    const formData = await request.formData();
    const responseCloud = await sendFileToCloud(formData);

    if (responseCloud.status === STATUS_CODE.OK) {
      const urlImage = (responseCloud as ResponseSuccess).data as string;
      if (user && user.email) {
        const isImageUpdated = await updateImageDb(urlImage, user.email);
        if (!isImageUpdated) {
          throw new Error();
        }
      }

      return NextResponse.json({
        status: STATUS_CODE.OK,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    return NextResponse.json({
      status: STATUS_CODE.INTERNAL,
      message: GENERAL_MESSAGE_ERROR,
    });
  }
};

export { setImageRequest as POST };
