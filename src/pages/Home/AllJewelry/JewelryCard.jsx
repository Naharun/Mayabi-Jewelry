


const JewelryCard = ({ jewelryData }) => {
    
    const { photo, jewelryName, availableJewelry, price, ownerName, details } = jewelryData;
    


    return (
        <>
            <div className="card w-96 bg-base-100 shadow-2xl" >
                <figure className="h-1/2"><img className="w-full"  src={photo} alt="class" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{jewelryName}</h2>
                    <p>Owner Name: <span className="font-medium">{ownerName}</span></p>
                    <p>Price: <span className="font-medium ">{price}</span></p>
                    <p>Details: <span className="font-medium ">{details}</span></p>
                    <p>Available Jewelry: <span className="font-medium ">{availableJewelry}</span></p>
                    <div className="card-actions justify-end">
                        <button  className="btn btn-accent">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JewelryCard;