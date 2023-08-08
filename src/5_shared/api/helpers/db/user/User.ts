import prisma from '@/global.d';

export class UserDB {
  getUser = async (email: string) => {
    try {
      const user = await prisma.user.findUnique({ where: { email } });
      return user;
    } catch {
      throw new Error('Cant get user');
    }
  };

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
