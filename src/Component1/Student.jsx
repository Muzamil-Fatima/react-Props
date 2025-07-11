function Student({ name }) {
  return (
    <div className="bg-amber-200 m-4 p-4">
    <h1 className="text-2xl font-bold">Student Component</h1>
      <h1>Student Name: {name}</h1>
    </div>
  );
}
export default Student;
