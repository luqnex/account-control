export const formatDate = (date: string | Date) => {
  const intl = new Intl.DateTimeFormat("pt-br");
  return intl.format(new Date(date));
};
