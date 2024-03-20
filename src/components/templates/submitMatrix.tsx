"use client";

import classnames from "classnames";
import { useContext, useState } from "react";
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

const initError = {
  message: "",
  isError: false,
};

const SubmitMatrix = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const { rotateMatrix, setRotatedMatrix } = useContext(MatrixContext);
  const [inputError, setInputError] = useState(initError);

  const refreshError = () => {
    setInputError(initError);
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setRotatedMatrix([[0]]);
    if (data.matrix.length === 0) {
      return setInputError({
        message: "El campo no debe estar vacio",
        isError: true,
      });
    }

    try {
      const input = JSON.parse(data.matrix.split(" ").join(""));
      if (!isDefined(input)) {
        return setInputError({
          message: "La matriz debe estar correctamente definida",
          isError: true,
        });
      }

      if (!isMatrix(input)) {
        return setInputError({
          message: "El valor debe ser una matriz 2D",
          isError: true,
        });
      }

      if (!isAllNumbersMatrix(input)) {
        return setInputError({
          message: "La matriz debe estar compuesta de solo numeros",
          isError: true,
        });
      }
      refreshError();
      rotateMatrix(input);
    } catch (e) {
      return setInputError({
        message: "El valor ingresado no puede ser interpretado",
        isError: true,
      });
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
            className={classnames(
              "block w-full rounded-md border-0 py-1.5 pr-10sm:text-sm sm:leading-6",
              inputError.isError
                ? " text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 "
                : "text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            )}
            placeholder="[[1, 2], [3, 4]]"
            defaultValue=""
            aria-invalid="true"
            aria-describedby="array-error"
            {...register("matrix")}
          />
          {inputError.isError ? (
            <p className="mt-2 text-sm text-red-600" id="email-error">
              {inputError.message}
            </p>
          ) : null}
        </div>
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
