"use client";

import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  matrix: string;
};

const SubmitMatrix = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
