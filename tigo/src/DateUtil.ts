export function getDateStringDaysAgo(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Monat ist 0-basiert, daher +1
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
