import { useState } from "react";

import Uni from "../Component1/Uni";
import Student from "../Component1/Student";
import User from "../Component1/User";

function First() {

  let userObject = {
    userName: "Fatima",
    age: 29,
    email: "fatima369@gmail.com",
  };
  let userObject1 = {
    userName: "Asma",
    age: 19,
    email: "asma369@gmail.com",
  };
  let userObject2 = {
    userName: "ALi",
    age: 19,
    email: "ali369@gmail.com",
  };
  let uniName = ["PGC", "VGC", "PU", "UOG"];

  const [student, setStudent] = useState();

  return (

    <>
      <h1 className="text-4xl font-bold m-4 ">Props in React JS</h1>
      <hr />
      {student && <Student name={student} />}
      <button
        onClick={() => setStudent("Fatima")}
        className="boarder border-amber-900 rounded-2xl bg-blue-400 hover:bg-blue-600 hover:text-white p-2 m-4"
      >
        Update Student name
      </button>
      <hr />
      <Uni names={uniName} />
      <hr />

      <User user={userObject} />
      <hr />
      <User user={userObject1} />
      <hr />
      <User user={userObject2} />
    </>
  );
}
export default First;
