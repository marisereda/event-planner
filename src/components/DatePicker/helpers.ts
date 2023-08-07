const MONTHES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate();
};

export const getFirstWeekday = (month: number, year: number) => {
  return new Date(year, month, 1).getDay();
};

export const isDatesSame = (date1: Date, date2: Date) => {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

export const formatDate = (date: Date) => {
  const dd = date.getDate().toString().padStart(2, '0');
  const mm = date.getMonth().toString().padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

export const formatMonth = (month: number) => {
  return MONTHES[month];
};
