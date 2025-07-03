function User({ data }) {
  return (
    <div>
      {/* <h1>User Component</h1> */}
      <div className="bg-amber-300 p-4 rounded-lg shadow-md m-5 w-2xs">
      <h3>ID : <span className="text-green-500" >{data.id}</span></h3>
      <h3>Name : <span className="text-green-500" >{data.name}</span></h3>
      <h3>Age : <span className="text-green-500" >{data.age}</span></h3>
      <h3>Email : <span className="text-green-500" >{data.email}</span></h3>
      </div>
    </div>
  );
}
export default User;

// make a one loop with the help of map function
// and pass the data to the User component