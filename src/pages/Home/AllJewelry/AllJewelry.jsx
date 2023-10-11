
import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../provider/AuthProvider';
import JewelryCard from './JewelryCard';

const AllJewelry = () => {
    const [jewelry, setJewelry] = useState([]);
    console.log(jewelry);
    const { loading } = useContext(AuthContext);
    useEffect(() => {
        fetch('https://y-sigma-neon.vercel.app/jewelry')
            .then(res => res.json())
            .then(data => {
                setJewelry(data);
            })
    }, [])
    if (loading) {
        return <div className="text-center py-60">
            <h1 className="text-3xl font-bold text-black">loading<span className="text-warning">.....</span></h1>
            <progress className="progress progress-warning mt-4 mx-auto w-1/4"></progress>
        </div>
    }

    return (
        <div className='bg-slate-200 rounded-md py-5 px-4'>
            <Helmet>
                <title>Mayabi Jewelry | All Jewelry</title>
            </Helmet>
            <h1 className="text-3xl font-serif font-bold text-center">Our All Jewelries Are Here !!<br />
                We can also make as you like and you can get it in 10 days.
            </h1>
            <div className="divider"></div>
            <div className='grid md:grid-cols-2 space-y-4 lg:grid-cols-3 mx-auto w-full'>
                {
                    jewelry.map((jewelryData) => <JewelryCard
                        key={jewelryData._id}
                        jewelryData={jewelryData}
                    ></JewelryCard>)
                }
            </div>
        </div>
    );
};

export default AllJewelry;