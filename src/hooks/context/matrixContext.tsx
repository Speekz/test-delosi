import { Dispatch, SetStateAction, createContext, useState } from "react";

export type matrixContextType = {
  initMatrix: any[][];
  setInitMatrix: Dispatch<SetStateAction<any>>;
  rotatedMatrix: number[][];
  setRotatedMatrix: Dispatch<SetStateAction<any>>;
};

const initMatrixContext = {
  initMatrix: [[]],
  setInitMatrix: () => {},
  rotatedMatrix: [[]],
  setRotatedMatrix: () => {},
};

export const MatrixContext =
  createContext<matrixContextType>(initMatrixContext);

export const MatrixContextProvider = ({ children }: any) => {
  const [initMatrix, setInitMatrix] = useState(initMatrixContext.initMatrix);
  const [rotatedMatrix, setRotatedMatrix] = useState(
    initMatrixContext.rotatedMatrix
  );

  return (
    <MatrixContext.Provider
      value={{ initMatrix, setInitMatrix, rotatedMatrix, setRotatedMatrix }}
    >
      {children}
    </MatrixContext.Provider>
  );
};
