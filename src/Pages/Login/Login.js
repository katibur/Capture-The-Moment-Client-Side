import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../Assets/login.jpg";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Contexts/AuthProvider";
import { setAuthToken } from "../../Api/auth";
import useTtile from "../../Components/Hooks/Title";

const Login = () => {
  useTtile("Login");
  const { LogIn, setLoading, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    LogIn(email, password)
      .then((res) => {
        const user = res.user;
        setAuthToken(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => console.error("Error: ", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const user = res.user;
        setAuthToken(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error("Error: ", error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="max-w-sm rounded-lg shadow-2xl" src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <div className="m-3">
            <h1>email: user@gmail.com</h1>
            <h1>password: 7887sS$.</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Login"
              ></input>
            </div>
          </form>
          <div className="form-control mt-6 w-5/6 mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-accent"
            >
              <span className="mr-1 text-lg">
                <FcGoogle></FcGoogle>
              </span>
              Sign in With Google
            </button>
          </div>
          <div className="form-control my-6 w-5/6 mx-auto">
            <p>
              New Here?{" "}
              <Link to="/register">
                <button className="btn btn-outline">Register</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
