import React, { useContext } from "react";
import { MatrixContext } from "src/hooks/context/matrixContext";

function MatrixResolved() {
  const matrixContext = useContext(MatrixContext);
  return <div>{JSON.stringify(matrixContext.initMatrix)}</div>;
}

export default MatrixResolved;
