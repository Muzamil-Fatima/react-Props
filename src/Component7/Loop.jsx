function Loop() {
  //   const userName = ["Muzamil", "Farhan", "Ali", "Fatima", "Ayesha"];
  const userData = [
    { name: "Muzamil", age: "20", email: "muzamil@gmail.com", id: 1 },
    { name: "Farhan", age: 22, email: "farhan@gmail.com", id: 2 },
    { name: "Ali", age: 25, email: "ali@gmail.com", id: 3 },
  ];
  return (
    <div>
      <h1 className="bg-amber-300 p-2 text-2xl font-bold m-5">
        Loop Component
      </h1>
      <h1 className="bg-amber-300 p-2 text-2xl font-bold">
        Loop in Jsx with Map Function
      </h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Email</td>
            <td>age</td>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br /> <hr />
      <table>
        <thead>
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
            <td>Age</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Muzamil</td>
            <td>muzamil@gmail.com</td>
            <td>22</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Farhan</td>
            <td>farhan@gmail.com</td>
            <td>14</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Fatima</td>
            <td>fatima@gmail.com</td>
            <td>20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Loop;
