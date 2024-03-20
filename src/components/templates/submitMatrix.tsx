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
  const { setInitMatrix } = useContext(MatrixContext);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const input = JSON.parse(data.matrix);
    if (isDefined(input) && isMatrix(input) && isAllNumbersMatrix(input)) {
      setInitMatrix(input);
      console.log(input, "is a matrix");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("matrix")}></input>
        <button
          type="submit"
          className="border border-black py-2 px-4 text-black bg-purple-200 hover:bg-white hover:text-black hover:border-[#7161EF]"
        >
          <span className="text-base lg:text-xl">ENVIA</span>
        </button>
      </form>
    </div>
  );
};

export default SubmitMatrix;
