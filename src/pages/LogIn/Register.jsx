import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen hero bg-neutral">
            <div className="flex-col hero-content ">
                <div className="text-center lg:text-left">
                    <h1 className="mb-8 text-5xl font-bold text-neutral-content">Register now!</h1>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="photo URL" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>

                        </div>
                        <div className="mt-6 form-control">
                            <input className="btn btn-primary bg-neutral" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;