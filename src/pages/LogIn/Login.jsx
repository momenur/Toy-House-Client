import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn, googleSignIn } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    // Handle Google Login 

    const handelGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .then(error => {
                console.log(error)
            })
    }

    return (
        <div className="min-h-screen hero bg-neutral">
            <div className="flex-col hero-content ">
                <div className="text-center lg:text-left">
                    <h1 className="mb-8 text-5xl font-bold text-neutral-content">Login now!</h1>
                </div>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="mt-6 form-control">
                            <input className="btn btn-primary bg-neutral" type="submit" value="LOGIN" />
                        </div>
                        <div className="mt-6 form-control">
                            <button onClick={handelGoogleLogIn} className="btn btn-primary bg-neutral">Google SignIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;