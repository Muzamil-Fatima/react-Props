import React, { useState } from "react";
function Form() {
  const [name, setName]= useState("");
  const [password, setPassword]= useState("");
  const [email, setEmail]= useState("");
  return (
    <div className="p-6">
      <h1 className="bg-amber-300 text-xl font-bold mb-4">Controller Component</h1>
      <form action="" method="get" className="space-y-3">
        <input
        value={name}
          type="text" onChange={(event) => setName(event.target.value)}
          placeholder="Enter Name"
          className="border border-gray-400 px-3 py-2 rounded w-[220px] m-1.5"
        />
        <input
          value={password}
          type="password" onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter Password"
          className="border border-gray-400 px-3 py-2 rounded w-[220px] m-1.5"
        />
        <input
          value={email}
          type="email" onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
          className="border border-gray-400 px-3 py-2 rounded w-[220px] m-1.5"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-1.5">
          Submit
        </button>
        <button onClick={()=>{setEmail(''); setName(''); setPassword('')}} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-1.5">
          Clear
        </button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
      </form>
    </div>
  );
}
export default Form;

