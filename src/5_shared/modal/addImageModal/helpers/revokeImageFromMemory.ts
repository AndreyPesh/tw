import { RefObject } from 'react';

export const revokeImageFromMemory = (
  refImage: RefObject<HTMLImageElement>
) => {
  if (refImage.current) {
    refImage.current.onload = function handleLoad() {
      refImage.current && URL.revokeObjectURL(refImage.current.src);
    };
  }
};
