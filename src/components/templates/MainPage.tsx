"use client";

import React from "react";
import { MatrixContextProvider } from "src/hooks/context/matrixContext";
import SubmitMatrix from "./submitMatrix";
import MatrixResolved from "./MatrixResolved";

function MainPage() {
  return (
    <MatrixContextProvider>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="flex flex-col border border-gray-500 rounded-md">
          <div className="flex flex-col p-8">
            <h1 className="text-xl font-bold">
              Rotación de Matriz 90º Contrareloj
            </h1>
            <SubmitMatrix />
            <MatrixResolved />
          </div>
        </div>
      </div>
    </MatrixContextProvider>
  );
}

export default MainPage;
