import dayjs from 'dayjs';

const addMissingMonths = (data: Record<string, string | number>[]) => {
  const result = [];
  const year = dayjs().year();

  for (let month = 1; month <= 12; month++) {
    const formattedMonth = `${month}`.padStart(2, '0');
    const date = `${year}-${formattedMonth}`;
    const existingEntry = data.find(entry => entry.date === date);

    if (existingEntry) {
      result.push(existingEntry);
    } else {
      result.push({ date });
    }
  }
  return result;
};

export default addMissingMonths;
