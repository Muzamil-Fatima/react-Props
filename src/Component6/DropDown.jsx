import { useState } from "react";
function DropDown() {
  const [gender, setGender] = useState("Female");
  const [city, setCity] = useState("Wazirabad");
  return (
    <div className="m-6">
      <h1 className="bg-amber-300 p-2 text-2xl font-bold m-5">
        DropDown Component
      </h1>
      <h1 className="bg-amber-300 p-2 text-2xl font-bold">
        Handle Radio and Dropdown
      </h1>
      <br />
      <input
        onChange={(event) => setGender(event.target.value)}
        type="radio"
        name="gender"
        value="Male"
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        checked={gender === "Female"}
        value="Female"
        onChange={(event) => setGender(event.target.value)}
        type="radio"
        name="gender"
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2 className="bg-blue-300 text-2xl font-medium m-2">Selected Gender : {gender}</h2>
      <br /> <br /> <br />
      <h4 className="text-2xl font-bold bg-amber-200 m-6">Select City</h4>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"Wazirabad"}
        name=""
        id=""
        className="border border-gray-400 rounded px-2 py-1"
      >
        <option value="wazirabad">Wazirabad</option>
        <option value="gujrat">Gujrat</option>
        <option value="lahore">Lahore</option>
        <option value="karachi">Karachi</option>
        <option value="gujrawala">Gujrawala</option>
      </select>
      <h2 className="bg-blue-300 text-2xl font-medium m-2">Selected City:{city}</h2>
    </div>
  );
}
export default DropDown;
