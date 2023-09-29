import { FC, ReactNode } from 'react';

interface MiddleTitleProps {
  children: ReactNode;
}

const MiddleTitle: FC<MiddleTitleProps> = ({ children }) => {
  return <h2 className='mb-5 text-lg text-center font-semibold'>{children}</h2>;
};

export default MiddleTitle;
