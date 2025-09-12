export function formatDate(date) {
  const dateParts = date.split('-');
  const formatDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  return formatDate;
}
