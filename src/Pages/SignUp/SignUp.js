import { getAuth, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';
import { app } from '../../firebase/firebase.init';
import useSetTitle from '../../hooks/useSetTitle';

const auth = getAuth(app);
const SignUp = () => {
    const { signUp, user } = useContext(AuthContext);
    const [error, setError] = useState(null);
    useSetTitle('Sign Up')
    const handelSignUp = event => {
        setError(null);
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        signUp(email, password)
            .then(({ user }) => {
                console.log(user)
                updateProfile(auth.currentUser, {
                    displayName: `${name}`, photoURL: `${photo}`
                }).then(() => {
                }).catch((err) => {
                    console.log(error);
                    setError(err.message);
                });

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
                    <form onSubmit={handelSignUp} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' required type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Photo URL</span>
                            </label>
                            <input name='photo' required type="text" placeholder="user photo url" className="input input-bordered" />
                        </div>
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
                                <Link to="/login" className="label-text-alt font-bold text-green-700 link link-hover">Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn font-bold text-white bg-pink-800">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <img className=' w-3/5' src="https://pathwayport.com/saasland/images/login@4x.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;