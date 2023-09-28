import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Title from '../../components/Title/Title';

const AddToy = () => {

    const {user} = useContext(AuthContext)
    console.log(user.email);

    const handleAddToy = event => {
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

        const newToy = {photo, toyName, sellerEmail, sellerName, quantity, category, sellerImg, rating, detail}
        console.log(newToy);

        fetch('https://toy-world-server-virid.vercel.app/allToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            form.reset()
            alert('Data is Added')
        })

    }
    return (
        <div>
            <Title title="add a toy"/>
            <div className="flex-shrink-0 w-full my-8 rounded-md shadow-2xl bg-rose-400 card">
                <form onSubmit={handleAddToy} className="card-body">
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered"/>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered"/>
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" placeholder="Seller Name" name='sellerName' className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="text" placeholder="Seller Email" name='sellerEmail' className="input input-bordered" value={user.email}/>
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered"/>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input type="text" placeholder="Sub-Category : bike/car/jeep" name='category' className="input input-bordered"/>
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text"> Seller Picture</span>
                            </label>
                            <input type="text" placeholder=" Seller Picture" name='sellerImg' className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail</span>
                        </label>
                        <textarea placeholder="Detail" name='detail' className="w-full textarea textarea-bordered textarea-md" ></textarea>
                    </div>
                    <div className="mt-6 form-control">
                    <input className="btn btn-primary" type="submit" value="Add a Toy" />
                </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;