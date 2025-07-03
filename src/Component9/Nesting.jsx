import Loop from "./Loop";

function Nesting() {
  const collegeDemo = [
    {
      name: "PGC",
      city: "Wazirabad",
      website: "www.pgc.com",
      student: [
        { name: "Ali", age: "20", email: "ali@gmail.com" },
        { name: "Muzamil", age: "20", email: "muzamil@gmail.com" },
        { name: "Fatima", age: "20", email: "fatima@gmail.com" },
      ],
    },
    {
      name: "VGC",
      city: "Wazirabad",
      website: "www.vgc.com",
      student: [
        { name: "Ali", age: "20", email: "ali@gmail.com" },
        { name: "Muzamil", age: "20", email: "muzamil@gmail.com" },
        { name: "Fatima", age: "20", email: "fatima@gmail.com" },
      ],
    },
    {
      name: "UOG",
      city: "Gujrat",
      website: "www.uog.com",
      student: [
        { name: "Ali", age: "20", email: "ali@gmail.com" },
        { name: "Muzamil", age: "20", email: "muzamil@gmail.com" },
        { name: "Fatima", age: "20", email: "fatima@gmail.com" },
      ],
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
        🏫 Nesting Loop with React Components
      </h2>

      <div className="space-y-6">
        {collegeDemo.map((college, index) => (
          <div key={index}>
            <Loop college={college} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Nesting;