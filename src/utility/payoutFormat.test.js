import { numericString } from "./payoutFormat";

describe("test method's ability to round numbers up to 2 decimal-point strings", () => {
  it("should turn 1.5 into '1.50' instead", () => {
    const result = numericString(1.5);
    expect(result).toBe("1.50");
  }); // PASSES
  it("should turn 0 into '0.00' instead", () => {
    const result = numericString(0);
    expect(result).toBe("0.00");
  }); // PASSES
});
