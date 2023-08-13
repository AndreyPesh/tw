import { headers } from 'next/dist/client/components/headers';

export const getDomain = () => {
  const h = headers();
  const url = new URL(h.get('referer') as string);
  return url.origin;
};
