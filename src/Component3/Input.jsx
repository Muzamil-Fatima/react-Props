import { useState } from "react";
function Input() {
  const [val, setVal] = useState("Muzamil Ftima");
  return (
    <div className="m-6">
      <h3 className="bg-amber-300 text-4xl font-extrabold p-2 m-4 ">
        Input Component
      </h3>
      <h1 className="text-2xl font-bold">Get Input field Value</h1>
      <input
        className="border border-gray-300 rounded-md px-4 py-2 m-1.5"
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
        placeholder="Enter User Name"
      />
      <h1 className="bg-amber-200">{val}</h1>
      <button
        className="border-2 border-amber-950 bg-blue-400 p-1 m-2"
        onClick={() => setVal("")}
      >
        Clear Value
      </button>
    </div>
  );
}
export default Input;
