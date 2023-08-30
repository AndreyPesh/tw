import classNames from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

interface ListPreviewImageProps {
  listUrlImage: Array<string>;
  activeSlide: number;
}

const ListPreviewImage: FC<ListPreviewImageProps> = ({
  listUrlImage,
  activeSlide,
}) => {
  return (
    <div className="flex">
      {listUrlImage.map((imageUrl, index) => (
        <div
          key={imageUrl + index}
          className={classNames('border-2 cursor-pointer', {
            'border-4': index + 1 === activeSlide,
          })}
        >
          <Image
            alt={imageUrl}
            width={200}
            height={200}
            src={imageUrl}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ListPreviewImage;
