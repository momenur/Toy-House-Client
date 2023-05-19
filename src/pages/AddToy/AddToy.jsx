import React from 'react';

const AddToy = () => {
    return (
        <div>
            
            <div className="flex-shrink-0 w-full my-8 bg-gray-400 rounded-md shadow-2xl card">
            <h1 className="my-8 text-5xl font-bold text-center text-rose-50 "><span className='border-b-2'>Add a Toy!</span></h1>
                <div className="card-body">
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className='gap-8 md:flex'>
                        <div className="md:w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <textarea placeholder="Bio" className="w-full textarea textarea-bordered textarea-md" ></textarea>
                    </div>


                    {/* <div className="mt-6 form-control">
                    <button className="btn btn-primary">Login</button>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default AddToy;