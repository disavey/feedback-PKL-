import React from "react";
import { useState } from "react";
import { InputTextarea } from "primereact/inputtextarea";

function Suggestion() {
  const [valueArea, setValueArea] = useState("");

  return (
    <div className="mt-[-20px] mr-10">
      <h2 className=" mt-12 text-xl font-bold">SUGGESTION</h2>
      <div className="card flex justify-content-center mt-4">
        <InputTextarea
          className="w-full border border-indigo-950 ml-10"
          autoResize
          value={valueArea}
          onChange={(e) => setValueArea(e.target.valueArea)}
          rows={5}
          cols={30}
        />
      </div>
      <div className=" mt-4 flex justify-end ">
        <button className=" border border-indigo-500 p-2 rounded bg-blue-800 text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Suggestion;
