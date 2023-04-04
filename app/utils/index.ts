export const formatDate = (date: string | Date) => {
  const intl = new Intl.DateTimeFormat("pt-br");
  return intl.format(new Date(date));
};

export const formatCurrencyValue = (value: number) => {
  const intNumberFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return intNumberFormat.format(value);
};
