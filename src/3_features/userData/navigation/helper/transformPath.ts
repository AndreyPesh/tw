const upperFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getCurrentSegmentFromPath = (path?: string) => {
  if (path) {
    const lastPathSegment = path.split('/').pop();
    return lastPathSegment ? upperFirstLetter(lastPathSegment) : null;
  }
  return null;
};
