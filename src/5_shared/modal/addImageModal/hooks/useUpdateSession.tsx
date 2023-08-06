import { useSession } from 'next-auth/react';

export const useUpdateSession = () => {
  const { data: session, update } = useSession();
  return (newImageUrl: string | null) => {
    session &&
      update({
        ...session,
        user: {
          ...session?.user,
          image: newImageUrl,
          picture: newImageUrl,
        },
      });
  };
};
