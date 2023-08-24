const sizeArray = ['B', 'KB', 'MB', 'GB', 'TB'];

export const humanizeSize = (size: number) => {
  let count = 0;
  const devideBy1024 = (num: number): { quotient: number; remainder: number } => {
    if (num < 1024) {
      return { quotient: num, remainder: 0 };
    }
    const result = num / 1024;
    count++;
    if (result >= 1024) {
      return devideBy1024(Math.floor(result));
    } else {
      return { quotient: Math.floor(result), remainder: num % 1024 };
    }
  };
  const { quotient, remainder } = devideBy1024(size);
  return `${quotient}.${String((remainder / 10).toFixed(0)).padStart(2, '0')}${sizeArray[count]}`;
};
