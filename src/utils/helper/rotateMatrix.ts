export function rotateAntiClockwise(matrix: number[][]): number[][] {
  const n = matrix.length;
  // create new matrix
  const rotatedMatrix: number[][] = Array.from({ length: n }, () =>
    Array(n).fill(null)
  );

  // move the elements to the new matrix.
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rotatedMatrix[n - j - 1][i] = matrix[i][j];
    }
  }

  // TIME O(n^2) SPACE O(n^2)
  return rotatedMatrix;
}

// NOTE: Rotation 90 Degree anti clockwise = 270 degree clockwise for next iteration of code.
