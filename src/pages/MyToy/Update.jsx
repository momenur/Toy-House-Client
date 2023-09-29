import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import Title from '../../components/Title/Title';

const Update = () => {
    const {user} = useContext(AuthContext)
    const old = useLoaderData()
    console.log(old);

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const toyName = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = user.email;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const sellerImg = form.sellerImg.value;
        const rating = form.rating.value;
        const detail = form.detail.value

        const updatedToy = { photo, toyName, sellerEmail, sellerName, quantity, category, sellerImg, rating, detail }
        console.log(updatedToy);

        fetch(`https://toy-world-server-virid.vercel.app/allToy/${old._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                form.reset()
                if(data.modifiedCount > 0){
                    Swal.fire('Updated Sucessfull')
                }
            })

    }


    return (
        <div  data-aos="zoom-out">
            <Title title="Update toy"/>
            <div className="flex-shrink-0 w-full my-8 rounded-md shadow-2xl bg-rose-400 card">
                
                <form onSubmit={handleUpdateToy} className="card-body">
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" defaultValue={old.photo} />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" defaultValue={old.toyName} />
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" placeholder="Seller Name" name='sellerName' className="input input-bordered" defaultValue={old.sellerName} />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" placeholder="Seller Email" name='sellerEmail' className="input input-bordered" defaultValue={old.sellerEmail} />
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered" defaultValue={old.quantity} />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input type="text" placeholder="Sub-Category : bike/car/jeep" name='category' className="input input-bordered" defaultValue={old.category} />
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text"> Seller Picture</span>
                            </label>
                            <input type="text" placeholder=" Seller Picture" name='sellerImg' className="input input-bordered" defaultValue={old.sellerImg} />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name='rating' className="input input-bordered" defaultValue={old.rating} />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail</span>
                        </label>
                        <textarea placeholder="Detail" name='detail' className="w-full textarea textarea-bordered textarea-md" defaultValue={old.detail} ></textarea>
                    </div>
                    <div className="mt-6 form-control">
                            <input className="btn btn-primary" type="submit" value="UPDATE TOY" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;