// 'use client';

// import { FC } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { ProductData } from '@/src/6_shared/api/helpers/db/phone/PhoneDb';
// import Rating from '@/src/6_shared/UI/rating/Rating';
// import AddToCartButton from '@/src/4_features/cart/AddToCartButton';
// import { EnumLinkPage } from '@/src/6_shared/constants/main_navigation/enums';
// import { UNKNOWN_BRAND_NAME } from '@/src/6_shared/types/constant';

// const PhoneCard: FC<{ data: ProductData }> = ({ data }) => {
//   const router = useRouter();
//   const { model, images, rating, price, id } = data;
//   const previewImageSrc =
//     images && images.length > 0 ? images[0].url : '/avatar.svg';

//   const brandName = data.brand[0].list.name
//     ? data.brand[0].list.name
//     : UNKNOWN_BRAND_NAME;

//   const routeToDetailsHandler = () => {
//     router.push(`${EnumLinkPage.DETAILS}${id}`);
//   };

//   return (
//     <div
//       className="p-5 w-full sm:max-w-xs box-border text-sm border rounded-lg cursor-pointer hover:shadow-lg"
//       onClick={routeToDetailsHandler}
//     >
//       <Image
//         src={previewImageSrc}
//         width={500}
//         height={500}
//         alt={`Phone ${brandName} ${model}`}
//       />
//       <h3>
//         <b>{brandName}</b>
//       </h3>
//       <h3>{model}</h3>
//       <div>
//         <Rating rating={rating} />
//       </div>
//       <span className="p-2 w-full inline-flex justify-between items-center">
//         <h3 className="font-bold text-base">Price: {price} &#36;</h3>
//         <AddToCartButton idProduct={data.id} />
//       </span>
//     </div>
//   );
// };

// export default PhoneCard;
