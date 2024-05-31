export const formattedNumber = (num: number) =>
  new Intl.NumberFormat().format(num);

export const formatCurrency = (currencyString: string): string => {
  const currencySymbol = currencyString[0];
  const numberPart = currencyString.slice(1);

  const formattedNumber = parseInt(numberPart).toLocaleString();

  return `${currencySymbol}${formattedNumber}`;
};
