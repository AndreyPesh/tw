import { Address } from '@prisma/client';
import { AddressData } from '../UI/form/types/types';

export function filterAddress(address: Address | null): AddressData | null {
  if (address) {
    const { id, userId, ...userAddress } = address;
    return userAddress;
  }
  return address;
}
