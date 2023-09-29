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

  updateName = async (email: string, name: string) => {
    try {
      const userData = await prisma.user.update({
        where: { email },
        data: { name },
      });
      return userData ? userData : null;
    } catch (error) {
      throw new Error('Cant update user name');
    }
  };

  updateEmail = async (email: string, newEmail: string) => {
    try {
      const userData = await prisma.user.update({
        where: { email },
        data: { email: newEmail },
      });
      return userData ? userData : null;
    } catch (error) {
      throw new Error('Cant update user email');
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
