import { AxiosResponse } from 'axios';
import { Dispatch, FC, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { AddressFormData } from './types/interfaces';
import Button from '@/src/6_shared/buttons/Button';
import { EnumTypeButton } from '@/src/6_shared/buttons/types/enums';
import Input from './input/Input';
import { initAddressData } from './types/constants';
import { AddressData } from './types/types';
import useAddressQuery from '../../hooks/useAddressQuery';
import { STATUS_CODE } from '@/src/6_shared/api/user/types/enums';
import { ResponseUserAddress } from '../../fetch/AddressAPI';

interface AddressFormProps {
  addressData: AddressData | null;
  hideFormHandler: Dispatch<SetStateAction<boolean>>;
}

const AddressForm: FC<AddressFormProps> = ({
  addressData,
  hideFormHandler,
}) => {
  const { createAddressFetch, updateAddressFetch, isLoading } =
    useAddressQuery();

  const defaultAddressValue = addressData ? addressData : initAddressData;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressFormData>({ defaultValues: defaultAddressValue });

  const onSubmit: SubmitHandler<AddressFormData> = async (
    addressFormData: AddressFormData
  ) => {
    try {
      let response: AxiosResponse<ResponseUserAddress>;
      if (addressData) {
        response = await updateAddressFetch({
          addressData: addressFormData,
        });
      } else {
        response = await createAddressFetch({
          addressData: addressFormData,
        });
      }
      if (response.status === STATUS_CODE.OK) {
        hideFormHandler(false);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <div>
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
        <div className="w-full md:max-w-[300px] flex flex-wrap justify-around">
          <Button
            type="button"
            variant={EnumTypeButton.DANGER}
            handler={() => hideFormHandler(false)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant={EnumTypeButton.APPLY}
            isLoading={isLoading}
          >
            Save address
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
