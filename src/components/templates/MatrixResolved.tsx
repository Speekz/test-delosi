import React, { useContext } from "react";
import { MatrixContext } from "src/hooks/context/matrixContext";

function MatrixResolved() {
  const { rotatedMatrix } = useContext(MatrixContext);

  return (
    <div>
      {JSON.stringify(rotatedMatrix) === "[[0]]"
        ? ""
        : JSON.stringify(rotatedMatrix)}
    </div>
  );
}

export default MatrixResolved;
