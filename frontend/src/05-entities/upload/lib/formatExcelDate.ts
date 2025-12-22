export function formatExcelDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  return (
    `${String(date.getDate()).padStart(2, "0")}.` +
    `${String(date.getMonth() + 1).padStart(2, "0")}.` +
    `${date.getFullYear()}`
  );
}
