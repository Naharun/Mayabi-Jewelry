import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const AddJewelry = () => {
    const {user}= useContext(AuthContext);
    console.log(user);
    const handleAddJewelry = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const ownerName = form.ownerName.value;
        const className = form.className.value;
        const ownerEmail = form.ownerEmail.value;
        const price = form.price.value;
        const availableJewelry = form.availableJewelry.value;
        const details = form.details.value;
        const add = { photo,  ownerName, className, ownerEmail, price, availableJewelry, details,}
        console.log(add);
        fetch('http://localhost:5000/addJewelry', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
            .then(res => res.json())
            .then(data => { console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Jewelry Added Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200 w-[1000px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <div className="card-body w-[500px]">
                        <h2 className="mx-auto text-3xl font-semibold text-orange-950">Add A Jewelry</h2>
                        <form onSubmit={handleAddJewelry} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Jewelry Name</span>
                                </label>
                                <input type="text" name="className" placeholder="Jewelry Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Owner Name</span>
                                </label>
                                <input type="text" name="ownerName" readOnly   placeholder="Owner Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Owner Email</span>
                                </label>
                                <input type="email" name="ownerEmail"  readOnly  placeholder="Owner Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Available Jewelry</span>
                                </label>
                                <input type="text" name="availableJewelry" placeholder="Available Jewelry" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Jewelry Details</span>
                                </label>
                                <input type="text" name="details" placeholder="Details" className="input input-bordered" />
                            </div>
                            <div className="form-control w-1/2 mx-auto mt-6">
                                <button className="btn btn-neutral">Add A Jewelry</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddJewelry;