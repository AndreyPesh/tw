import { RefObject } from 'react';

export const getCurrentTranslateValue = (
  refDivElement: RefObject<HTMLDivElement>
) => {
  const currentTransformPropertyValue =
    refDivElement.current && refDivElement.current.style.transform;
  const translateValue =
    currentTransformPropertyValue &&
    currentTransformPropertyValue.match(/[-0-9]+/);
  return translateValue ? Number(translateValue[0]) : 0;
};
