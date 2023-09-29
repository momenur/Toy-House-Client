import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Title from '../../components/Title/Title';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
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
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate('/')
            })
            .catch(error => console.log(error));
    }

    // Handle Google Login 

    const handelGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                navigate('/')
            })
            .then(error => {
                console.log(error)
            })
            
    }

    return (
        <div className="min-h-screen hero">
            <div className="flex-col hero-content ">
                <Title title="login Now"/>
                <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-rose-500 md:w-[600px]">
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
                            <input className="btn btn-primary" type="submit" value="LOGIN" />
                        </div>
                        <div className="mt-6 form-control">
                            <button onClick={handelGoogleLogIn} className="btn btn-primary">Google SignIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;