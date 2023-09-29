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

export function transformTime(date: Date) {
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const resultTime = `${formatWithZero(hour)}:${formatWithZero(
    minutes
  )}:${seconds}`;
  return resultTime;
}
