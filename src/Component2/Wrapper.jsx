function Wrapper({ children, color = "green" }) {
  return (
    <div className="m-4">
    <h3 className="bg-blue-300">Wrapper Component</h3>
    <div style={{ color: color, border: "5px solid green", width: "300px" }}>
      {children}
    </div>
    </div>
  );
}
export default Wrapper;
