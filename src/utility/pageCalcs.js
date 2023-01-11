export function round(initNum, places) {
  return +(Math.round(initNum + "e+" + 2) + "e-" + 2);
} // rounds to 2 decimal places

// Calculate totals for  paid payouts, unpaid payouts, ready payouts
// Need these values at top of the webpage
export function calcWebpageTotals(mockData) {
  let paidPayouts = 0;
  let unpaidPayouts = 0;
  let readyPayouts = 0;
  mockData.forEach((obj) => {
    paidPayouts += obj.paidPayouts;
    unpaidPayouts += obj.unpaidPayouts;
    readyPayouts += obj.readyPayouts;
  });

  return {
    paidPayouts: round(paidPayouts),
    unpaidPayouts: round(unpaidPayouts),
    readyPayouts: round(readyPayouts),
  };
}
