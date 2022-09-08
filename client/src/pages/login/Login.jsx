import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthConext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [box, setBox] = useState("login");

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data });
    }
  };

  return (
    // <div className="login">
    //   <div className="loginContainer">
    //     <input
    //       type="text"
    //       placeholder="username"
    //       id="username"
    //       onChange={handleChange}
    //       className="loginInput"
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       id="password"
    //       onChange={handleChange}
    //       className="loginInput"
    //     />
    //     <button
    //       disabled={loading}
    //       onClick={handleLogin}
    //       className="loginButton"
    //     >
    //       Login
    //     </button>
    //     {error && <span>{error.message}</span>}
    //   </div>
    // </div>
    <div className="loginContainer">
      {box === "login" ? (
        <div className="loginBox mainBox">
          <h2>Login</h2>
          <div className="form">
            <div className="userBox">
              <input
                type="text"
                id="username"
                onChange={handleChange}
                className="loginInput"
                required={true}
              />
              <label>Username</label>
            </div>
            <div className="userBox">
              <input
                type="password"
                id="password"
                onChange={handleChange}
                className="loginInput"
                required={true}
              />
              <label>Password</label>
            </div>
            <button
              disabled={loading}
              onClick={handleLogin}
              className="btn loginButton"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign in
            </button>
            <p className="message">
              Not registered?
              <span
                onClick={() => setBox("register")}
                style={{
                  padding: "5px",
                  color: "#fff",
                  textDecorationLine: "underline",
                  cursor: "pointer",
                }}
                href="#"
              >
                Create an account
              </span>
            </p>
          </div>
        </div>
      ) : null}
      {box === "register" ? (
        <div className="registerBox mainBox">
          <h2>Register</h2>
          <div className="form">
            <div className="userBox">
              <input
                type="text"
                required={true}
                autoComplete="off"
                className="loginInput"
              />
              <label>Email</label>
            </div>
            <div className="userBox">
              <input
                type="text"
                required={true}
                autoComplete="off"
                className="loginInput"
              />
              <label>Name</label>
            </div>
            <div className="userBox">
              <input type="password" required={true} className="loginInput" />
              <label>Password</label>
            </div>
            <div className="userBox">
              <input type="password" required={true} className="loginInput" />
              <label>Confirm Password</label>
            </div>
            <button className="btn loginButton">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign up
            </button>
            <p className="message">
              Already registered?
              <span
                onClick={() => setBox("login")}
                style={{
                  padding: "5px",
                  color: "#fff",
                  textDecorationLine: "underline",
                  cursor: "pointer",
                }}
                href="#"
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Login;
