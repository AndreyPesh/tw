import prisma from '@/global.d';

export class UserDB {
  updateImageDb = async (urlImage: string, email: string) => {
    try {
      const updateUser = await prisma.user.update({
        where: {
          email,
        },
        data: {
          image: urlImage,
        },
      });
      return updateUser ? updateUser.image : null;
    } catch (error) {
      throw new Error();
    }
  };

  deleteImage = async (email: string) => {
    try {
      const user = await prisma.user.update({
        where: {
          email,
        },
        data: {
          image: null,
        },
      });
      return user;
    } catch (error) {
      throw new Error();
    }
  };
}
