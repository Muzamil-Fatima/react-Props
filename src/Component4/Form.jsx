function Form() {
  return <div>
    <h1>Controller Component</h1>
    <form action="" method="get">
        <input type="text" placeholder="Enter Name" className="m-1.5" />
        <input type="password" placeholder="Enter Password" className="m-1.5" />
        <input type="email" placeholder="Enter Email" className="m-1.5"/>
        <button>Submit</button>
    </form>
  </div>;
}
export default Form;
