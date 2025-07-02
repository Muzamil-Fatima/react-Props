function Wrapper({ children, color = "green" }) {
  return (
    <>
    <h3 className="bg-amber-300">Wrapper Component</h3>
    <div style={{ color: color, border: "5px solid green", width: "300px" }}>
      {children}
    </div>
    </>
  );
}
export default Wrapper;
