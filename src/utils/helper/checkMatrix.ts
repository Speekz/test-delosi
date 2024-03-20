// Function that check if the matrix are all numbers
export function isAllNumbersMatrix(matrix: any[][]): boolean {
  return matrix.every(
    (row) => row.every((element) => typeof element === "number") // Check if all elements are numbers
  );
}

export function isDefined(value: any): value is any[] {
  return typeof value === "object" && value !== null && Array.isArray(value); // Check if the matrix is defined
}

export function isMatrix(obj: any): obj is any[][] {
  return (
    Array.isArray(obj) &&
    obj.every((row) => Array.isArray(row)) &&
    obj.length !== 0
  ); // Check if each row is an array
}
