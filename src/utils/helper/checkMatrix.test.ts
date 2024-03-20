import { isDefined, isMatrix, isAllNumbersMatrix } from "./checkMatrix";

describe("matrix is undefined", () => {
  it("should return false", () => {
    const input = undefined;
    expect(isDefined(input)).toBe(false);
  });
});

describe("matrix is defined", () => {
  it("something is defined", () => {
    const input: any[] = [];
    expect(isDefined(input)).toBe(true);
  });

  it("something is defined, but is not a matrix", () => {
    const input: any[] = [];
    expect(isDefined(input) && isMatrix(input)).toBe(false);
  });

  it("something is defined, but is not a 2D array structure", () => {
    const input: any = { a: 1, b: [2, 3] };
    expect(isDefined(input) && isMatrix(input)).toBe(false);
  });

  it("something is defined and is an array, not a matrix", () => {
    const input: any[] = [1, 2, 3];
    expect(isDefined(input) && isMatrix(input)).toBe(false);
  });

  it("something is defined and is an matrix", () => {
    const input: any[] = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(isDefined(input) && isMatrix(input)).toBe(true);
  });
});

describe("matrix is an array of numbers", () => {
  it("matrix contains numbers and something else", () => {
    const input: any[][] = [
      [1, "two", 3],
      [-4.5, 5, 6],
    ];
    expect(
      isDefined(input) && isMatrix(input) && isAllNumbersMatrix(input)
    ).toBe(false);
  });

  it("matrix contains only numbers", () => {
    const input: any[][] = [
      [1, 2, 3],
      [-4, 5, 6],
    ];
    expect(
      isDefined(input) && isMatrix(input) && isAllNumbersMatrix(input)
    ).toBe(true);
  });
});
