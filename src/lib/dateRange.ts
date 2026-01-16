const toYmd = (d: Date) => d.toISOString().slice(0, 10);
export const getLastMonthsRangeYmd = (months = 6) => {
  const max = new Date();
  const min = new Date();
  min.setMonth(min.getMonth() - months);

  return {
    min_date: toYmd(min),
    max_date: toYmd(max),
  };
};