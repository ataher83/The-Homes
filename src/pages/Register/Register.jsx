import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault(); 

        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photoURL = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        // console.log(name, photoURL, email, password)


        createUser(email, password)
            .then(result => {
                console.log(result.user) 
            })
            .catch(error => {
                console.error(error)
            })

    
    }


    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-3/4 lg:w-1/2">

                <div className="text-center">
                    <h1 className="text-4xl font-bold">Please Register!</h1>
                </div>

                <div className="card  w-full  shadow-2xl bg-purple-100">

                    <form onSubmit={handleRegister}
                    className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                        </div>

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
                            <button className="btn bg-purple-600 font-bold text-black ">Register</button>
                        </div>

                    </form>

                    <p className="text-center mt-4">Already have an account? <Link className="text-green-600 font-bold" to="/login">Login</Link></p>

                </div>
            </div>
        </div>
      </div>
    );
};

export default Register;