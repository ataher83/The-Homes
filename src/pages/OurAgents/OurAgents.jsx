import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const OurAgents = () => {
    return (
        <div className="flex gap-5">
            <Helmet>
                <title>The-Homes | OurAgents</title>
            </Helmet>

            <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                <div className="avatar  ">
                    <div className="w-34 rounded-full items-center text-center ">
                        <img src="https://i.postimg.cc/QFJH5tHb/agent-1.jpg" />
                    </div>
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-500">Vincent Fuller</h2>
                    <p>Real Estate Agent , Country House Real Estate</p>
                    <div className="card-actions">
                    <Link className=" text-blue-500 font-medium">View Profile</Link>
                    </div>
                </div>

            </div>



            <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                <div className="avatar  ">
                    <div className="w-34 rounded-full items-center text-center ">
                        <img src="https://i.postimg.cc/2qj3xDWf/agent-2.jpg" />
                    </div>
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-500">Brittany Watkins</h2>
                    <p>Company Agent , All American Real Estate</p>
                    <div className="card-actions">
                    <Link className=" text-blue-500 font-medium">View Profile</Link>
                    </div>
                </div>

            </div>



            <div className="card w-96 bg-base-100 shadow-xl card-body items-center text-center">
                <div className="avatar  ">
                    <div className="w-34 rounded-full items-center text-center ">
                        <img src="https://i.postimg.cc/Y4X0nsNL/agent-3.jpg" />
                    </div>
                </div>

                <div className="card-body items-center text-center">
                    <h2 className="card-title text-blue-500">Michelle Ramirez</h2>
                    <p>Company Agent , Modern House Real Estate</p>
                    <div className="card-actions">
                    <Link className=" text-blue-500 font-medium">View Profile</Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OurAgents;