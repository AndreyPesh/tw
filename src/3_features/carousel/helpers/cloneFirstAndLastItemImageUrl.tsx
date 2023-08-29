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
  return {
    listImageUrlWithCloneFirstAndLastItem,
    numberLastSlideNotConsideringClone,
  };
};

export default cloneFirstAndLastItemImageUrl;
