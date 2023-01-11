// Turns 0.2 into "0.20" for example
export const numericString = function (num) {
  return num.toFixed(2).toString();
};
