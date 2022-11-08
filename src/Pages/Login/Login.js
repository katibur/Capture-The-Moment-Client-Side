import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../Assets/login.jpg';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className="max-w-sm rounded-lg shadow-2xl" src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-accent"><span className='mr-1 text-lg'><FcGoogle></FcGoogle></span>Sign in With Google</button>
                        </div>
                        <div className="form-control mt-6">
                            <p>New Here? <Link to='/register'><button className='btn btn-outline'>Register</button></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;