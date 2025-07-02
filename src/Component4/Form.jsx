function Form() {
  return <div>
    <h1 className="bg-amber-300">Controller Component</h1>
    <form action="" method="get">
        <input type="text" placeholder="Enter Name" />
        <input type="password" placeholder="Enter Password"/>
        <input type="email" placeholder="Enter Email"/>
        <button >Submit</button>
    </form>
  </div>;
}
export default Form;
