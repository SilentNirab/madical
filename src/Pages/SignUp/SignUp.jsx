import { useState } from 'react';
import loginimg from '../../assets/images/login.png'
import { useForm } from "react-hook-form"
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-10">
                <div className="bg-cover bg-center min-h-[550px] md:h-screen bg-[url('assets/images/loginbg.png')] flex items-center px-20 md:w-2/4">
                    <img className='w-full' src={loginimg} alt="" />
                </div>
                <div className="md:w-2/4 px-10 lg:px-20 lg:pr-40">
                    <div className="border border-gray-200 rounded-lg p-10 space-y-6 mb-10 md:mb-0">
                        <h3 className='text-2xl font-bold text-center'>Sign Up to Doc House</h3>
                        <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>

                            <label className='font-bold'>First Name</label>
                            <input className="bg-[#F3F3F3] rounded-md p-4 F3F3F3 placeholder:#9D9C9C" placeholder="Enter your name" {...register("name", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />

                            <label className='font-bold'>Username</label>
                            <input className="bg-[#F3F3F3] rounded-md p-4 F3F3F3 placeholder:#9D9C9C" placeholder="Enter your username" {...register("username", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />

                            <label className='font-bold'>Email</label>
                            <input className="bg-[#F3F3F3] rounded-md p-4 F3F3F3 placeholder:#9D9C9C" placeholder="Enter your email" {...register("Email", { required: "Email Address is required" })} aria-invalid={errors.firstName ? "true" : "false"} />

                           <label className='font-bold'>Password</label>
                            <div className=" form-control relative">
                                 
                                <input type={
                                    showPassword ? 'text' : 'password'
                                } {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} name="password" id="password" placeholder="Password" className="bg-[#F3F3F3] rounded-md p-4 F3F3F3 placeholder:#9D9C9C" />
                                {errors.password?.type === 'required' && <p className="text-[#F7A582]">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-[#F7A582]">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-[#F7A582]">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-[#F7A582]">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <span className="absolute top-11 right-4" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }
                                </span>
                            </div>
                            <input className="bg-[#F7A582] text-xl py-2 my-2 hover:bg-[#ca8668] text-white rounded-lg col-span-2" type="submit" value="Create Account" />
                                <p className='text-center text-[#6C6B6B]'>Already registered? Go to <Link to={'/login'} className="text-[#F7A582] font-bold">SIGN IN</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;