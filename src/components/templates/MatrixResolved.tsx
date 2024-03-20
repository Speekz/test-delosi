import React, { useContext } from "react";
import { MatrixContext } from "src/hooks/context/matrixContext";

function MatrixResolved() {
  const { rotatedMatrix } = useContext(MatrixContext);

  return (
    <div className="pt-4">
      <div>
        <label className="block text-lg font-medium leading-6 text-gray-900">
          Matriz Rotada
        </label>
      </div>
      <div>
        <label>
          {JSON.stringify(rotatedMatrix) === "[[0]]"
            ? ""
            : JSON.stringify(rotatedMatrix)}
        </label>
      </div>
    </div>
  );
}

export default MatrixResolved;
