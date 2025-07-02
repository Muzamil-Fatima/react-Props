function User({ user }) {
  console.log(user);
  return (
    <>
      <h1 className="bg-amber-300">User Component</h1>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
      <h1>Email: {user.email}</h1>
    </>
  );
}

export default User;
