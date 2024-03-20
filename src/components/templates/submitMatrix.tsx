"use client";

import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { MatrixContext } from "src/hooks/context/matrixContext";
import {
  isAllNumbersMatrix,
  isDefined,
  isMatrix,
} from "src/utils/helper/checkMatrix";

type Inputs = {
  matrix: string;
};

const SubmitMatrix = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { rotateMatrix } = useContext(MatrixContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.matrix.length === 0) {
      return;
    }
    const input = JSON.parse(data.matrix.split(" ").join(""));
    if (isDefined(input) && isMatrix(input) && isAllNumbersMatrix(input)) {
      rotateMatrix(input);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div className="relative mt-2 rounded-md shadow-sm">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Ingresa la matriz
          </label>
          <input
            type="text"
            id="matrix"
            className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
            placeholder="[[1, 2], [3, 4]]"
            defaultValue=""
            aria-invalid="true"
            aria-describedby="array-error"
            {...register("matrix")}
          />
        </div>
        {/* <p className="mt-2 text-sm text-red-600" id="email-error">
          No es una matriz valida
        </p> */}
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Rotar!
        </button>
      </form>
    </div>
  );
};

export default SubmitMatrix;
