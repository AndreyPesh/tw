import { FC } from 'react';
import { PhoneDetails } from '@prisma/client';

interface PhoneDetailsProps {
  listDetails: PhoneDetails | null;
}

const PhoneDetailsTable: FC<PhoneDetailsProps> = ({ listDetails }) => {
  return (
    <>
      {listDetails ? (
          <table className="w-full">
            <thead className='bg-slate-200 text-left'>
              <tr>
                <th className='p-2'>Details</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
              <tr className='odd:bg-slate-50 even:bg-slate-100'>
                <td className='p-2'>Display:</td>
                <td className='p-2'>{listDetails.display}</td>
              </tr>
              <tr className='odd:bg-slate-50 even:bg-slate-100'>
                <td className='p-2'>Mobile Operating System:</td>
                <td className='p-2'>{listDetails.os}</td>
              </tr>
              <tr className='odd:bg-slate-50 even:bg-slate-100'>
                <td className='p-2'>Internal memory:</td>
                <td className='p-2'>{listDetails.memory} Gb</td>
              </tr>
              <tr className='odd:bg-slate-50 even:bg-slate-100'>
                <td className='p-2'>Near Field Communication (NFC):</td>
                <td className='p-2'>{listDetails.nfc ? <span>Yes</span> : <span>No</span>}</td>
              </tr>
              <tr className='odd:bg-slate-50 even:bg-slate-100'>
                <td className='p-2'>Type of charging cord:</td>
                <td className='p-2'>{listDetails.charge}</td>
              </tr>
            </tbody>
          </table>
      ) : (
        <h2>Details are not found</h2>
      )}
    </>
  );
};

export default PhoneDetailsTable;
