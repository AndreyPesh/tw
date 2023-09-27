import { StatusOrder } from '@prisma/client';
import { LuNetwork } from 'react-icons/lu';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { GoPackageDependencies } from 'react-icons/go';

const CurrentStatusOrder = ({
  currentStatus,
}: {
  currentStatus: StatusOrder;
}) => {
  if (currentStatus === StatusOrder.HANDLING) {
    return (
      <span className="px-2 inline-flex items-center">
        Processing:{' '}
        <LuNetwork size={20} color="orange" style={{ marginLeft: '5px' }} />
      </span>
    );
  }
  if (currentStatus === StatusOrder.SHIPPING) {
    return (
      <span className="px-2 inline-flex items-center">
        In way:{' '}
        <LiaShippingFastSolid
          size={20}
          color="red"
          style={{ marginLeft: '5px' }}
        />
      </span>
    );
  }
  if (currentStatus === StatusOrder.COMPLETED) {
    return (
      <span className="px-2 inline-flex items-center">
        Completed:{' '}
        <GoPackageDependencies
          size={20}
          color="green"
          style={{ marginLeft: '5px' }}
        />
      </span>
    );
  }
  return null;
};

export default CurrentStatusOrder;
