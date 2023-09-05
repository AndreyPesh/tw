import { FC } from 'react';
import { PhoneDetails } from '@prisma/client';

interface PhoneDetailsProps {
  listDetails: PhoneDetails | null;
}

const PhoneDetailsTable: FC<PhoneDetailsProps> = ({ listDetails }) => {
  return (
    <div>
      {listDetails ? (
        <table>
          <tbody>
            <tr>
              <th>Display:</th>
              <td>{listDetails.display}</td>
            </tr>
            <tr>
              <th>Mobile Operating System:</th>
              <td>{listDetails.os}</td>
            </tr>
            <tr>
              <th>Internal memory:</th>
              <td>{listDetails.memory} Gb</td>
            </tr>
            <tr>
              <th>Near Field Communication (NFC):</th>
              <td>{listDetails.nfc ? <span>Yes</span> : <span>No</span>}</td>
            </tr>
            <tr>
              <th>Type of charging cord:</th>
              <td>{listDetails.charge}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h2>Details are not found</h2>
      )}
    </div>
  );
};

export default PhoneDetailsTable;
