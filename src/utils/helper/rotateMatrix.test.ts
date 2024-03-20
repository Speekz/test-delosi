import { rotateAntiClockwise } from "./rotateMatrix";

describe("rotateMatrix270", () => {
  it("should rotate a 3x3 matrix 270 degrees clockwise", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const expectedOutput = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];
    expect(rotateAntiClockwise(input)).toEqual(expectedOutput);
  });
});
