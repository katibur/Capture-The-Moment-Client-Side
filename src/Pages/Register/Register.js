import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import register from '../../Assets/register.jpg';
import { setAuthToken } from '../../Api/auth';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const { createUser, setLoading, googleSignIn } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                setAuthToken(user);
                form.reset();
            })
            .catch(error => console.error('Error: ', error))
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                setAuthToken(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error('Error: ', error))
            .finally(() => {
                setLoading(false);
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">

                    <img className="max-w-sm rounded-lg shadow-2xl" src={register} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Register Now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Sign Up'></input>
                        </div>
                    </form>
                    <div className="form-control mt-6 w-5/6 mx-auto">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-accent"><span className='mr-1 text-lg'><FcGoogle></FcGoogle></span>Sign in With Google</button>
                    </div>
                    <div className="form-control my-6 w-5/6 mx-auto">
                        <p>Already Have An Account?<Link to='/login'> <button className='btn btn-outline'>Login</button></Link></p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;