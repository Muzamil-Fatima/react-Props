import Students from "./Students";

function Loop({ college }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
      <h1 className="text-xl font-semibold text-blue-700 mb-2">
        🏫 College Name: {college.name}
      </h1>
      <ul className="text-gray-700 space-y-1">
        <li>📍 City: <span className="font-medium">{college.city}</span></li>
        <li>🌐 Website: <span className="text-blue-500 underline">{college.website}</span></li>
      </ul>
      <div className="mt-4">
        <Students student={college.student} />
      </div>
    </div>
  );
}

export default Loop;