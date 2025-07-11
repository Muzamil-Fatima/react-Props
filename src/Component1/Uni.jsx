function Uni({ names }) {
  return (
    <div className="bg-amber-200 m-4 p-4">
      <h1 className="text-2xl font-bold">Uni Names</h1>
      <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1>
      <h1>{names[3]}</h1>
    </div>
  );
}

export default Uni;
