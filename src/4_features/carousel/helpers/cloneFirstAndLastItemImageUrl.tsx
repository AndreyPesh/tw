const cloneFirstAndLastItemImageUrl = (listImageUrl: string[]) => {
  const firstImageUrl = listImageUrl[0];
  const lastImageUrl = listImageUrl[listImageUrl.length - 1];
  const listImageUrlWithCloneFirstAndLastItem = [
    lastImageUrl,
    ...listImageUrl,
    firstImageUrl,
  ];
  const numberLastSlideNotConsideringClone =
    listImageUrlWithCloneFirstAndLastItem.length - 2;
  const numberLastSlide = listImageUrlWithCloneFirstAndLastItem.length - 1;
  return {
    listImageUrlWithCloneFirstAndLastItem,
    numberLastSlideNotConsideringClone,
    numberLastSlide,
  };
};

export default cloneFirstAndLastItemImageUrl;
