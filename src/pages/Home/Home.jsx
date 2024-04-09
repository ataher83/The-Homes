import { useLoaderData } from "react-router-dom";
import Estate from "../Estate/Estate";
import Banner from "./Banner";


const Home = () => {
    const estates =useLoaderData();
    // console.log(estates)

    return (
        <div>
            <Banner></Banner>
            <div className="py-16">
                <p className="text-center text-3xl font-semibold">Discover Our Featured Listings</p>
                <p className="text-center">Find your dream, find exclusive real estate opportunities within the cities & towns & villages.</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        estates.map(estate => <Estate
                        key={estate.id}
                        estate = {estate}
                        ></Estate>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;