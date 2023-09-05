import { PhoneDetails } from '@prisma/client';
import { FC } from 'react';

interface PhoneDetailsProps {
  listDetails: PhoneDetails | null;
}

const PhoneDetailsTable: FC<PhoneDetailsProps> = ({ listDetails }) => {
  return (
    <div>{listDetails ? listDetails.display : 'Details are not found'}</div>
  );
};

export default PhoneDetailsTable;
