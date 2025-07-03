import User from "../Component8/User";
function ReUse() {
  const userData = [
    { name: "Muzamil", age: "20", email: "muzamil@gmail.com", id: 1 },
    { name: "Farhan", age: 22, email: "farhan@gmail.com", id: 2 },
    { name: "Ali", age: 25, email: "ali@gmail.com", id: 3 },
  ];
  return (
    <div>
      <h1>Reuse Component in React</h1>
      {userData.map((user) => (
        <div key={user.id}> 
        <User data={user} /> 
        </div>
      ))}
    </div>
  );
}

export default ReUse;
