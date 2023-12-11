export const nowISO = new Date().toISOString();

export const isoToUtcString = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toUTCString();
};

export const addDays = (amount: number) => {
  const date = new Date();
  return new Date(date.setDate(date.getDate() + amount));
};
