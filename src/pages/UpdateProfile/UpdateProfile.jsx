import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { Navigate } from "react-router-dom";


const UpdateProfile = () => {
    const { user, updateUserProfile,
         setReload 
        } = useContext(AuthContext);

    const handleProfileUpdate = e => {
        e.preventDefault(); 

        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photoURL = form.get('photoURL')



        //reset error & success message
        // setRegError('');
        // setSuccess('');


        // update profile 
        updateUserProfile(name, photoURL).then(()=> {
            Navigate(form);
            setReload(true);
        });
    
    }

    return (
        <div className="flex flex-col justify-center items-center text-blue-600">
            <Helmet>
                <title>The-Homes | UpdateProfile</title>
            </Helmet>
            
            <p className="text-2xl  font-semibold ">Update Your Profile</p>

            { user && <div>
            <h3>Name: {user.displayName}</h3>
            <p>Email: {user.email}</p>
            <div className="flex items-center">
                <p>Photo: </p>
                <img className="w-24 " src={user.photoURL} alt="" />
            </div>
            </div>
            }


            <form onSubmit={handleProfileUpdate}
                        className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Name:</span>
                                </label>
                                <input type="text" name="name" placeholder="write new name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">New Photo:</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="give new photoURL" className="input input-bordered" required />
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn bg-purple-600 font-bold text-black ">Update Profile</button>
                            </div>

            </form>

        </div>
    );
};

export default UpdateProfile;