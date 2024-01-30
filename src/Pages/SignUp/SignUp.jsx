import React from 'react';
import img1 from '../../assets/others/authentication2.png';
import img2 from '../../assets/others/authentication.png';
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const SignUp = () => {
    const {
        register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className="hero min-h-screen bg-base-200 bg" style={{ backgroundImage: `url(${img2})` }}>
            <div className="hero-content flex lg:flex-row-reverse items-center justify-between md:flex-col">
                <div className="text-center lg:text-left">
                    <img className='w-[600px] h-[400px] ' src={img1} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-500'>name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-500'>email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                                {...register("password", {
                                    required: true,
                                    maxLength: 12,
                                    minLength: 6,
                                    pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/
                                })} />
                            {errors.password?.type === "required" && (<p className='text-red-600'>password must be at least 6 characters</p>)}
                            {errors.password?.type === "minLength" && (<p className='text-red-600'>password must be at least 6 characters</p>)}
                            {errors.password?.type === "maxLength" && (<p className='text-red-600'>password must not be more than 12 characters</p>)}
                            {errors.password?.type === "pattern" && (<p className='text-red-600'>password must contain at least 1 uppercase, 1 lowercase, 1 special character, 1 number</p>)}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <Link to='/login'><p>Already registered? <span className='underline text-green-600 font-semibold hover:scale-125'>Go to log in</span></p></Link>
                        <p>Or sign up with</p>
                    </div>
                    <div className='flex items-center justify-center py-5'>
                        <Link className='flex items-center justify-center hover:scale-110 transition duration-400 ease-in-out mx-3 rounded-full h-[30px] w-[30px] border-t-red-700 border-b-red-700 border border-black'><FaFacebookF /></Link>
                        <Link className='flex items-center justify-center hover:scale-110 transition duration-400 ease-in-out mx-3 rounded-full h-[30px] w-[30px] border-t-red-700 border-b-red-700 border border-black'><FaGoogle /></Link>
                        <Link className='flex items-center justify-center hover:scale-110 transition duration-400 ease-in-out mx-3 rounded-full h-[30px] w-[30px] border-t-red-700 border-b-red-700 border border-black'><FaGithub /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;