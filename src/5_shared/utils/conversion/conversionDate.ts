export function transformDate(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const resultDate = `${formatWithZero(day)}-${formatWithZero(
    month + 1
  )}-${year}`;
  return resultDate;
}

export function formatWithZero(value: number) {
  return value <= 9 ? `0${value}` : value.toString();
}
