// Function that check if the matrix are all numbers
export function checkAllNumbersMatrix(
  matrix: Array<number | string> | undefined
): boolean {
  if (!isDefined(matrix)) {
    return false;
  }

  if (isMatrix(matrix)) {
    // WIP
  }

  return true;
}

function isDefined(value: any): value is number[][] {
  return typeof value === "object" && value !== null && Array.isArray(value);
}

function isMatrix(obj: any): obj is number[][] {
  return Array.isArray(obj) && obj.every((row) => Array.isArray(row)); // Check if each row is an array
}
