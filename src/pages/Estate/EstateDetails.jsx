import { useLoaderData, useParams } from "react-router-dom";
import { ImLocation2 } from "react-icons/im";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { IoLogoUsd } from "react-icons/io";




const EstateDetails = () => {

    const homes =useLoaderData();
    const {id} = useParams()
        // console.log(id)
    // console.log( typeof(id) )
    //এখানে প্যারাম এর মাধ্যেমে যে id পাওয়া যায় তা String, তাই একে Integer এ কনভারট করে নিতে হবে, অথবা  == (double equal operator) দিয়ে কম্পেয়ার করতে হবে। 

    const idInt = parseInt(id)

    const home = homes.find(h => h.id === idInt) 
    // console.log( id, homes )
   



    return (
        <div className="card bg-base-100 shadow-xl mt-4">

            <figure><img className="w-full h-72" src={home.image} alt="Shoes" />
            </figure>

            <div className="flex justify-between px-2 pt-1 font-semibold">
                <p className="flex items-center"><TfiRulerAlt2 className="text-blue-400" /> {home.area}</p>
                <p className="flex items-center"><IoLogoUsd className="text-blue-400" /> {home.price}</p>
                <p className="bg-orange-400 rounded  capitalize px-1">For <span >{home.status}</span></p>
            </div>

            <div className="card-body px-1">
                <div className="flex gap-2 items-center justify-center">
                    
                    <div className="avatar pt-2">
                        <div className="w-4 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                            <p className="text-center font-semibold -mt-1 ">{home.id}</p>
                        </div>
                    </div>
                    <h2 className="card-title">
                        {home.estate_title}
                        <div className="badge badge-secondary">{home.segment_name}</div>
                    </h2>
                </div>
                    
                <p className="flex items-center font-normal text-blue-500 pb-2"><ImLocation2 className="text-blue-400" />{home.location}</p>
                    
                <p>{home.description}</p>

                <p className="text-center font-semibold ">Facilities:</p>
                <div className="card-actions justify-center items-center">
                    <div className="badge badge-outline bg-blue-400 font-semibold text-white border-blue-500">{home.facilities[0]}</div> 
                    <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">{home.facilities[1]}</div> 
                    <div className="badge badge-outline  bg-blue-400 font-semibold text-white border-blue-500">{home.facilities[2]}</div> 
                </div>


            </div>
        </div>
    );
};

export default EstateDetails;