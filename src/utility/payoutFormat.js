export const convertPayoutString = function (moneyString) {
  return Number(parseFloat(moneyString).toFixed(2));
}; // turns "0.00" to 0 for example

// Turns 0.2 into "0.20" for example
export const numericString = function (num) {
  return num.toFixed(2).toString();
};
