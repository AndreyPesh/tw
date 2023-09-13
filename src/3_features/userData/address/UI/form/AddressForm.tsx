import { Dispatch, FC, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddressFormData } from './types/interfaces';
import Button from '@/src/5_shared/buttons/Button';
import { EnumTypeButton } from '@/src/5_shared/buttons/types/enums';
import Input from './input/Input';
import { initAddressData } from './types/constants';
import { AddressData } from './types/types';
import useAddressQuery from '../../hooks/useAddressQuery';
import { STATUS_CODE } from '@/src/5_shared/api/types/enums';

interface AddressFormProps {
  addressData: AddressData | null;
  hideFormHandler: Dispatch<SetStateAction<boolean>>;
}

const AddressForm: FC<AddressFormProps> = ({
  addressData,
  hideFormHandler,
}) => {
  const { createAddressFetch, isLoading } = useAddressQuery();

  const defaultAddressValue = addressData ? addressData : initAddressData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({ defaultValues: defaultAddressValue });

  const onSubmit: SubmitHandler<AddressFormData> = async (
    addressData: AddressFormData
  ) => {
    try {
      const response = await createAddressFetch({ addressData });      
      if (response.status === STATUS_CODE.OK) {
        hideFormHandler(false);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Country"
        placeholder="Enter country"
        register={register('country', { required: true })}
        error={errors.country}
      />
      <Input
        label="City"
        placeholder="Enter city"
        register={register('city', { required: true })}
        error={errors.city}
      />
      <Input
        label="Street"
        placeholder="Your street"
        register={register('street', { required: true })}
        error={errors.street}
      />
      <Input
        label="Building"
        placeholder="Enter building"
        register={register('building', { required: true })}
        error={errors.building}
      />
      <Input
        label="Post code"
        placeholder="Enter post code"
        register={register('postCode', { required: true })}
        error={errors.postCode}
      />
      <p className="py-2 font-bold">Enter your address data.</p>
      <Button
        type="submit"
        variant={EnumTypeButton.APPLY}
        isLoading={isLoading}
      >
        Save address
      </Button>
    </form>
  );
};

export default AddressForm;
