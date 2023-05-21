import React from 'react';

const AddToy = () => {
    return (
        <div>
            
            <div className="flex-shrink-0 w-full my-8 bg-gray-400 rounded-md shadow-2xl card">
            <h1 className="my-8 text-5xl font-bold text-center text-rose-50 "><span className='border-b-2'>Add a Toy!</span></h1>
                <form className="card-body">
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' className="input input-bordered" />
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
                            <input type="text" placeholder="Seller Email" name='sellerEmail' className="input input-bordered" />
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input type="text" placeholder="Available Quantity" name='quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <input type="text" placeholder="Sub-Category" name='category' className="input input-bordered" />
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