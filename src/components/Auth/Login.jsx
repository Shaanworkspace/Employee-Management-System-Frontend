import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import HeroImage from "../../assets/heroImage.jpg"


const Login = ({identifyUser}) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const role = searchParam.get("role") || "default" ;
    
    const bgColor = role === "admin" ? "bg-[#FAF9F5]" : role === "employee" ? "bg-green-900" : "bg-stone-800";

    const submitHandler = (e) => {
        e.preventDefault();
        //we have to change it as we are ignoring the default behaviors of it
        identifyUser(email,password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className={`${bgColor} flex items-center h-screen w-screen justify-center`}>
            <div className="border-3 border-solid border-stone-950 h-140 flex rounded-2xl">
                
                <form onSubmit={(e) => {submitHandler(e)}} className='flex w-lg flex-col items-center justify-center gap-6'>
                    
                    <h1 className='text-5xl pb-10 text-stone-950 font-semibold'>Login here...🖐</h1>
                    
                    <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='text-2xl pr-3 text-stone-950 pl-1'>Email</label>
                    <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className="placeholder:text-gray-400  bg-transparent outline-none pl-3  w-100 h-10  text-stone-950 border-1 border-LoginPageColor rounded-lg " type="email" name="" id="" placeholder='Enter The Email Id' />
                    </div>
                    <div  className='flex flex-col gap-2'>
                        <label htmlFor=""  className='text-2xl pr-3 text-stone-950 pl-1'>Password</label>
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}}  className="placeholder:text-gray-400 bg-transparent outline-none h-10 w-100 text-stone-950 pl-3  border-1 border-LoginPageColor rounded-lg " type="password" placeholder='Enter The Password' />
                    </div>
                    
                    <div className='flex justify-between w-97 text-lg'>
                        <label className='text-LoginPageColor gap-1.5 flex'>
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </label>
                        <p className='text-LoginPageColor text-lg'>Forget password ?</p>
                    </div>
                    <button type="submit" className="text-stone-950 bg-LoginPageColor outline-none h-10 w-40 p-7  rounded-full flex items-center justify-center text-lg" >Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login