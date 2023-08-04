import prisma from '@/global.d';

export const updateImageDb = async (urlImage: string, email: string) => {
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
