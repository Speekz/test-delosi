import { rotateAntiClockwise } from "./rotateMatrix";

describe("rotate empty matrix", () => {
  it("should return empty", () => {
    const input: number[][] = [];
    expect(rotateAntiClockwise(input)).toHaveLength(0);
  });
});

describe("rotate 1x1 matrix", () => {
  it("should rotate a 1x1 matrix 270 degrees clockwise", () => {
    const input = [[1]];
    const expectedOutput = [[1]];
    expect(rotateAntiClockwise(input)).toEqual(expectedOutput);
  });
});

describe("rotate 3x3 matrix", () => {
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

  it("should rotate a 3x3 matrix 270 degrees clockwise with 0 values", () => {
    const input = [
      [0, 2, 3],
      [4, 0, 6],
      [7, 8, 0],
    ];
    const expectedOutput = [
      [3, 6, 0],
      [2, 0, 8],
      [0, 4, 7],
    ];
    expect(rotateAntiClockwise(input)).toEqual(expectedOutput);
  });
});

describe("rotate 4x4 matrix", () => {
  it("should rotate a 4x4 matrix 270 degrees clockwise", () => {
    const input = [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ];
    const expectedOutput = [
      [11, 10, 7, 16],
      [9, 8, 6, 12],
      [1, 4, 3, 14],
      [5, 2, 13, 15],
    ];
    expect(rotateAntiClockwise(input)).toEqual(expectedOutput);
  });
});
