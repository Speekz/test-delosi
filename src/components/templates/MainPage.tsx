"use client";

import React from "react";
import { MatrixContextProvider } from "src/hooks/context/matrixContext";
import SubmitMatrix from "./SubmitMatrix";
import MatrixResolved from "./MatrixResolved";

function MainPage() {
  return (
    <MatrixContextProvider>
      <h1>Rotacion de Matriz 90grados contrareloj</h1>
      <SubmitMatrix />
      <MatrixResolved />
    </MatrixContextProvider>
  );
}

export default MainPage;
