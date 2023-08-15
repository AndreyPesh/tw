import { headers } from 'next/dist/client/components/headers';

export const getDomain = () => {
  try {
    const h = headers();
    const url = new URL(h.get('referer') as string);
    console.log(`URL ${h.get('referer')}`);
    
    return url.origin;
  } catch (error) {
    console.log('URL ERROR ', error);
    
  }
};
