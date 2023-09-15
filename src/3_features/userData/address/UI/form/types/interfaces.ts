import { AddressData } from './types';

export interface AddressFormData {
  country: string;
  city: string;
  street: string;
  building: string;
  postCode: string;
}

export interface CreateAddressData {
  userId: string;
  addressData: AddressData;
}
