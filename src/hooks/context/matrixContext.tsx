import { Dispatch, SetStateAction, createContext, useState } from "react";
import { rotateAntiClockwise } from "src/utils/helper/rotateMatrix";

export type matrixContextType = {
  initMatrix: number[][];
  setInitMatrix: Dispatch<SetStateAction<any>>;
  rotatedMatrix: number[][];
  setRotatedMatrix: Dispatch<SetStateAction<any>>;
  rotateMatrix: (input: number[][]) => void;
};

const initMatrixContext = {
  initMatrix: [[0]],
  setInitMatrix: () => {},
  rotatedMatrix: [[0]],
  setRotatedMatrix: () => {},
  rotateMatrix: () => {},
};

export const MatrixContext =
  createContext<matrixContextType>(initMatrixContext);

export const MatrixContextProvider = ({ children }: any) => {
  const [initMatrix, setInitMatrix] = useState(initMatrixContext.initMatrix);
  const [rotatedMatrix, setRotatedMatrix] = useState(
    initMatrixContext.rotatedMatrix
  );

  const rotateMatrix = (input: number[][]) => {
    setInitMatrix(input);
    setRotatedMatrix(rotateAntiClockwise(input));
  };

  return (
    <MatrixContext.Provider
      value={{
        initMatrix,
        setInitMatrix,
        rotatedMatrix,
        setRotatedMatrix,
        rotateMatrix,
      }}
    >
      {children}
    </MatrixContext.Provider>
  );
};
