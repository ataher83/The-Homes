import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const UserProfile = () => {
    const { user } = useContext(AuthContext);


    return (
        <div className="flex flex-col justify-center items-center text-blue-600">
            <p className="text-2xl  font-semibold ">User Details Info</p>
            { user && <div>
            <h3>User: {user.displayName}</h3>
            <p>Email: {user.email}</p>
            <img className="w-24" src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default UserProfile;