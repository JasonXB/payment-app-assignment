export function calculateTotals(mockData) {
  let cashTotal, creditTotal = 0; // prettier-ignore
  const printList = [];

  mockData.forEach((obj, i) => {
    // Update cash and credit totals for each object in the mockData list
    if (obj.payoutType === "Cash") cashTotal += obj.readyPayouts;
    else creditTotal += obj.readyPayouts;
    // Create a list to console log as per the assignment request
    printList.push({
      affiliateName: obj.affiliateName,
      payoutAmount: obj.readyPayouts,
    });
  });

  // Return 3 total values
  return {
    cashTotal,
    creditTotal,
    sum: cashTotal + creditTotal,
    printList,
  };
} //^ JEST test this fn

// Take list of mock Data and filter out array entries where payouts = 0
export function filterZeroPayouts(data) {
  return data.filter((obj) => {
    // Convert ready payouts string to a 2 decimal number
    const payout = Number(parseFloat(obj.readyPayouts).toFixed(2));
    return payout > 0;
  });
} //^ JEST test this fn
