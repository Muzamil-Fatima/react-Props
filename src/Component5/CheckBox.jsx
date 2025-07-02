import { useState } from "react";
function CheckBox() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };
  return (
    <div className="m-5">
      <h1 className="bg-amber-300">CheckBox Component</h1>
      <h3>Select Your Skill</h3>

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
      <h1>{skills.toString()}</h1>
    </div>
  );
}
export default CheckBox;