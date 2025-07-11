function User({ user }) {
  console.log(user);
  return (
    <div className="m-4 p-4 bg-blue-300">
      <h1 className="text-2xl font-bold">User Component</h1>
      <h1>Name: {user.userName}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
}

export default User;
