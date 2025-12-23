export const isInRange = (
  date: Date,
  start?: Date | null,
  end?: Date | null,
) => {
  if (start && date < start) return false;
  if (end && date > end) return false;
  return true;
};
