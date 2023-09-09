import Empty from '@/src/1_page/Empty';
import Carousel from '@/src/3_features/carousel/Carousel';
import ActionWithProduct from '@/src/3_features/phones/actions/ActionWithProduct';
import PhoneDetails from '@/src/3_features/phones/details/PhoneDetails';
import { getPhoneDataById } from '@/src/5_shared/utils/server/fetching/phone/data';

const PhoneDetailPage = async ({ params }: { params: { id: string } }) => {
  const phoneData = await getPhoneDataById(params.id);

  return (
    <>
      {phoneData && phoneData.data ? (
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full md:w-[50%]">
              <Carousel
                listUrlImage={phoneData.data.images.map(
                  (imageData) => imageData.url
                )}
              />
            </div>
            <div className="py-5 w-full md:w-[50%]">
              <h1 className="py-2 font-bold text-lg text-center md:text-left">
                {phoneData.data.brand[0].list.name}{' '}
                <b>{phoneData.data.model}</b>
              </h1>
              <div className="p-4 bg-green-100 rounded-lg border-2 border-green-400">
                <h2 className="font-bold">
                  Current price: {phoneData.data.price} &#36;
                </h2>
              </div>
              <ActionWithProduct idProduct={phoneData.data.id} />
              <PhoneDetails listDetails={phoneData.data.details} />
            </div>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default PhoneDetailPage;
