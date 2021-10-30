import "./login.css";

export default function Login() {
  return (
    <div className="App">
      <div className="Login">
        <div>
          <h3>Welcome Back!</h3>
        </div>
        <div className="textBoxDiv">
          <input className="textBox" placeholder="Name" />
        </div>
        <div className="textBoxDiv">
          <input className="textBox" placeholder="Password" />
        </div>
        <div>
          <input className="Button" type="button" value="Sign in" />
        </div>
      </div>
    </div>
  );
}
