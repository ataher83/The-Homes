import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signIn, handleGoogleSignIn, handleGithubSignIn } = useContext(AuthContext);

    const [regError, setRegError] = useState(''); 
    const [success, setSuccess] = useState(''); 

    const location = useLocation(); 
    const navigate = useNavigate();



    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password'); 

        //reset error & success message
        setRegError('');
        setSuccess('');


        // signin user
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('You have Logged-In Successfully.')
                toast.success('You have Logged-In Successfully.')

                //navigate after login
                navigate(location?.state?  location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setRegError(error.message);
                // toast.error(error.message);
                toast.error('Invalid Email or Password !');
            })
    }



    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-3/4 lg:w-1/2">

                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login!</h1>
                </div>

                <div className="card  w-full  shadow-2xl bg-green-100">

                    <form onSubmit={handleLogin}
                    className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn bg-green-600 font-bold ">Login</button>
                        </div>
                    </form>

                    <div className="-mt-6 font-semibold text-center">
                        <button onClick={handleGoogleSignIn} className="btn">Login with Google</button>
                        <button onClick={handleGithubSignIn} className="btn ml-4">Login with GitHub</button>
                    </div>


                    <div className="text-center mt-5">
                        {
                            regError && <p className="text-red-600">{regError}</p>
                        }
                        {
                            success && <p className="text-green-500">{success}</p>
                        }
                    </div>

                    

                    <p className="text-center mt-4">Do not have an account? <Link className="text-purple-600 font-bold" to="/register">Register</Link></p>

                </div>
            </div>
        </div>

        <ToastContainer />
        
      </div>
    );
};

export default Login;