import classNames from 'classnames';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

interface ListPreviewImageProps {
  listUrlImage: Array<string>;
  activeSlide: number;
  setNumberSlide: Dispatch<SetStateAction<number>>;
}

const ListPreviewImage: FC<ListPreviewImageProps> = ({
  listUrlImage,
  activeSlide,
  setNumberSlide,
}) => {
  return (
    <div className="flex justify-center box-border">
      {listUrlImage.map((imageUrl, index) => (
        <div
          key={imageUrl + index}
          onClick={() => setNumberSlide(index + 1)}
          className={classNames('border-2 cursor-pointer box-border', {
            'border-2 border-cyan-950': index + 1 === activeSlide,
          })}
        >
          <Image
            alt={imageUrl}
            width={100}
            height={100}
            src={imageUrl}
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ListPreviewImage;
