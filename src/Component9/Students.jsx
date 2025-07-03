function Students({ student }) {
  return (
    <div>
      <h3 className="text-lg font-bold text-green-700 mb-2">👩‍🎓 Students</h3>
      <ul className="pl-4 space-y-3 list-disc text-gray-800">
        {student.map((stu, index) => (
          <li key={index} className="bg-gray-50 p-3 rounded-md shadow-sm border">
            <p><span className="font-semibold">Name:</span> {stu.name}</p>
            <p><span className="font-semibold">Age:</span> {stu.age}</p>
            <p><span className="font-semibold">Email:</span> {stu.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Students;