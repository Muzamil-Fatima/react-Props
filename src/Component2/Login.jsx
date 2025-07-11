import Login1 from "./Login1";
import Wrapper from "./Wrapper";

function Login() {

  return (

    <>
    <h1 className="bg-amber-300 m-4">Login Component</h1>
      <h1 className="m-4">Props in React</h1>
      <Wrapper color="orange">
        <h1> Hello Everyone</h1>
      </Wrapper>
      <Wrapper>
        <h1> Hello Muzamil</h1>
      </Wrapper>
      <Wrapper>
        <h1> Hello Fatima</h1>
        <h2>Please Login</h2>
      </Wrapper>
      <Login1 name="fatima" />
      <Login1 name="Ali" />
      <Login1 />
    </>

  );
}

export default Login;
