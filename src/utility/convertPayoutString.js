export const convertPayoutString = function(moneyString){
  return Number(parseFloat(moneyString).toFixed(2));
} // turns "0.00" to 0 for example