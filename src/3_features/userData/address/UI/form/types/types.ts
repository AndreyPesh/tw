import { Address } from '@prisma/client';

export type AddressData = Omit<Address, 'id' | 'userId'>;
