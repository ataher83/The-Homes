

const Estate = ({estate}) => {
    const { id, estate_title, segment_name, description, price, status, area, location, facilities, image, } = estate;

    return (
            
        <div className="card bg-base-100 shadow-xl mt-4">
                <figure><img className="w-full h-72" src={image} alt="Shoes" />
                </figure>

                <div className="card-actions justify-between px-2 ">

                    <p>Location: {location}</p>
                    <p>Area: {area}</p>
                </div>

                <div className="card-body px-1">

                    <div className="flex gap-2 items-center">
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

                    
                    <p>{description}</p>

                    <div className="card-actions justify-end items-center">
                        <p>Facilities:</p>
                        <div className="badge badge-outline">{facilities[0]}</div> 
                        <div className="badge badge-outline">{facilities[1]}</div> 
                        <div className="badge badge-outline">{facilities[2]}</div> 
                    </div>

                    <div className="card-actions justify-between ">
                        <p>Price: {price}</p>
                        <p>Status: {status}</p>
                    </div>
                </div>
        </div>
  
    );
};

export default Estate;