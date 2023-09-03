export const conversionScreenWidthToPercent = (currentPositionX: number) => {
  const screenWidth = window.innerWidth;
  return (currentPositionX / screenWidth) * 100;
};
