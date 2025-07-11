import { useState } from "react";
function CheckBox() {

  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };

  return (
    <div className="m-5">
      <h1 className="bg-amber-300 text-3xl font-bold">CheckBox Component</h1>
      <h3 className="text-2xl font-medium">Select Your Skill</h3>

      <input onChange={handleSkills} type="checkbox" name="" id="php" value="PHP" />
      <label htmlFor="php">PHP</label>
      <br />

      <input onChange={handleSkills} type="checkbox" name="" id="js"  value="JS"/>
      <label htmlFor="js">JS</label>
      <br />

      <input onChange={handleSkills} type="checkbox" name="" id="node" value="Node"/>
      <label htmlFor="node">Node</label>
      <br />

      <input onChange={handleSkills} type="checkbox" name="" id="java" value="Java" />
      <label htmlFor="java">Java</label>
      <br />

      <input onChange={handleSkills} type="checkbox" name="" id="c" value="C" />
      <label htmlFor="c">C</label>
      <br />
      <h1 className="bg-blue-300 p-3 m-1.5">Selected Skills: {skills.toString()}</h1>
    </div>
  );
}
export default CheckBox;