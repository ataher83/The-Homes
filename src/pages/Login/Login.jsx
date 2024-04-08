import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-3/4 lg:w-1/2">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>

                <div className="card  w-full  shadow-2xl bg-green-100">
                    <form className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn bg-green-600 font-bold ">Login</button>
                        </div>
                    </form>

                    <p className="text-center mt-4">Do not have an account? <Link className="text-purple-600 font-bold" to="/register">Register</Link></p>

                </div>
            </div>
        </div>
      </div>
    );
};

export default Login;