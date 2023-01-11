import { convertRawDateToString } from "./convertDate";

describe("date to string conversion testing", () => {
  it("should turn new Date(2022, 10, 28) into 28 Nov 2022", () => {
    const result = convertRawDateToString(new Date(2022, 10, 28));
    expect(result).toBe("28 Nov 2022");
  }); // PASSES
  it("should turn new Date(1996, 0, 05) into 05 Jan 1996", () => {
    const result = convertRawDateToString(new Date(1996, 0, 5));
    expect(result).toBe("05 Jan 1996");
  }); // PASSES
});
