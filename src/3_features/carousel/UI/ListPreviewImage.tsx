import classNames from 'classnames';
import Image from 'next/image';
import { Dispatch, FC, SetStateAction } from 'react';

interface ListPreviewImageProps {
  listUrlImage: Array<string>;
  activeSlide: number;
  setNumberSlide: Dispatch<SetStateAction<number>>;
  activateTransitionEffect: () => void;
}

const ListPreviewImage: FC<ListPreviewImageProps> = ({
  listUrlImage,
  activeSlide,
  setNumberSlide,
  activateTransitionEffect,
}) => {
  const SHIT_FROM_INDEX_ARRAY = 1;

  const onChangeSlideHandler = (numberSlide: number) => {
    activateTransitionEffect();
    setNumberSlide(numberSlide);
  };

  return (
    <div className="flex justify-center box-border">
      {listUrlImage.map((imageUrl, index) => (
        <div
          key={imageUrl + index}
          onClick={() => onChangeSlideHandler(index + SHIT_FROM_INDEX_ARRAY)}
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
