import { ImLocation2 } from "react-icons/im";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoLogoUsd } from "react-icons/io";
import { Link } from "react-router-dom";

const Estate = ({estate}) => {
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image, } = estate;

    return (
            
        <div className="card bg-base-100 shadow-xl mt-4">

                <figure><img className="w-full h-72" src={image} alt="Shoes" />
                </figure>

                <div className="flex justify-between px-2 pt-1 font-semibold">
                    <p className="flex items-center"><TfiRulerAlt2 className="text-blue-400" /> {area}</p>
                    <p className="flex items-center"><IoLogoUsd className="text-blue-400" /> {price}</p>
                    <p className="bg-orange-400 rounded  capitalize px-1">For <span >{status}</span></p>
                </div>

                <div className="card-body px-1">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="avatar pt-2">
                            <div className="w-4 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                                <p className="text-center font-semibold -mt-1 ">{id}</p>
                            </div>
                        </div>
                        <h2 className="card-title">
                            {estate_title}
                            <div className="badge badge-secondary">{segment_name}</div>
                        </h2>
                    </div>
                        
                    <p className="flex items-center font-normal text-blue-500 pb-2"><ImLocation2 className="text-blue-400" />{location}</p>
                        
                    <p>{description}</p>

                    <p className="text-center font-semibold ">Facilities:</p>
                    <div className="card-actions justify-center items-center">
                        <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">{facilities[0]}</div> 
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">{facilities[1]}</div> 
                        <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">{facilities[2]}</div> 
                    </div>

                    <div className="text-center mt-5">
                        <Link to={`/estateDetails/${id}`}><button className="btn btn-info w-1/3 ">View Property</button></Link>
                    </div>
                    

                </div>
        </div>
  
    );
};

export default Estate;