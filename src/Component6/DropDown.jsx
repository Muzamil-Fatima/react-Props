import { useState } from "react";
function DropDown() {
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("Wazirabad");
  return (
    <div>
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
        value={"male"}
        id="male"
      />
      <label htmlFor="male">Male</label>
      <input
        checked={gender === "female"}
        value={"female"}
        onChange={(event) => setGender(event.target.value)}
        type="radio"
        name="gender"
        id="female"
      />
      <label htmlFor="female">Female</label>
      <h2>Selected Gender:{gender}</h2>
      <br /> <br /> <br />
      <h4>Select City</h4>
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
      <h2>Selected City:{city}</h2>
    </div>
  );
}
export default DropDown;
