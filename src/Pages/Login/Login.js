import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';
import useSetTitle from '../../hooks/useSetTitle';

const Login = () => {
    const { login, googleLogin, user } = useContext(AuthContext);
    const [error, setError] = useState(null);
    useSetTitle('Login');
    const handelLogin = event => {
        setError(null)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(({ user }) => {
                console.log(user)
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
        form.reset();
    };
    return (
        <div className="hero min-h-screen bg-base-200">
            {
                user && <Navigate to="/services" replace={true} />
            }
            <div className="hero-content px-40 flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handelLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' required type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' required type="password" placeholder="password" className="input input-bordered" />
                            {
                                error &&
                                <label className="label">
                                    <p className="label-text-alt font-bold text-red-600 link link-hover">{error}</p>
                                </label>
                            }
                            <label className="label">
                                <Link to="/sign-up" className="label-text-alt font-bold text-green-700 link link-hover">Sign Up</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn font-bold text-white bg-pink-800">Login</button>
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <button
                        onClick={googleLogin}
                        className="btn mx-auto my-3 hover:bg-gray-600 btn-active btn-wide"
                    >Google</button>
                </div>
                <div className="text-center lg:text-left">
                    <img className=' w-3/5' src="https://pathwayport.com/saasland/images/login@4x.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;