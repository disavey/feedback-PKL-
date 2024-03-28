import React from "react";
import Image from "next/image";
import img from "/assets/logo.png";

function Top() {
  return (
    <>
      <div className=" w-52 ">
        <Image src={img} alt="Logo" width={200} />
      </div>
      <div className=" mt-5 ssl:text-center ">
        <h1 className="ssl:text-4xl  ssl:font-medium ">Feedback Customer</h1>
        <p className="mt-4 text-xl">
          Please take a moment to fill out this survey
        </p>
      </div>
    </>
  );
}

export default Top;
