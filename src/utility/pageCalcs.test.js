import { mockData } from "../mockData";
import { calcWebpageTotals } from "./pageCalcs";

describe("test method that calculates paid payouts, unpaid payouts, and ready payouts to display on the webpage", () => {
  it("should take mock data and return values of 0, 131.34, and 63.69", () => {
    const result = calcWebpageTotals(mockData);
    expect(result).toEqual({
      paidPayouts: 0,
      unpaidPayouts: 131.34,
      readyPayouts: 63.69,
    });
  }); // PASSES
});
