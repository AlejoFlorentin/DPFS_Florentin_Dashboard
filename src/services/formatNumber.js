export function formatNumber(number) {
  let parts = number.toString().split(".");
  let wholePart = parts[0];
  let decimalPart = parts.length > 1 ? parts[1] : "";

  wholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  let formattedNumber = "$ " + wholePart;
  if (decimalPart !== "") {
    formattedNumber += "," + decimalPart;
  }

  return formattedNumber;
}
