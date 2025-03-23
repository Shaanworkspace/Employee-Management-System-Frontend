import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AdminLoginImage from "../../assets/AdminLoginImage.jpg";

const AdminLogin = ({ identifyUser }) => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const location = useLocation();
    const searchParam = new URLSearchParams(location.search);
    const role = searchParam.get("role") || "default";

    const submitHandler = (e) => {
        e.preventDefault();
        identifyUser(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div 
            className="flex items-center h-screen w-screen justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${AdminLoginImage})` }}
        >
            {/* Blur Effect */}
            <div className="absolute inset-0 backdrop-blur-md bg-black/40"></div>

            <div className="relative border-3 border-solid border-stone-950 h-140 flex rounded-2xl bg-white/10 backdrop-blur-lg p-10 shadow-xl">
                <form onSubmit={submitHandler} className="flex w-lg flex-col items-center justify-center gap-6">
                    <h1 className="text-5xl pb-10 text-white font-semibold">{`${role} Login...🖐`}</h1>

                    <div className="flex flex-col gap-2">
                        <label className="text-2xl pr-3 text-white pl-1">Email</label>
                        <input 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className="placeholder:text-gray-300 bg-transparent outline-none pl-3 w-100 h-10 text-white border border-white rounded-lg" 
                            type="email" 
                            placeholder="Enter Your Email" 
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-2xl pr-3 text-white pl-1">Password</label>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className="placeholder:text-gray-300 bg-transparent outline-none h-10 w-100 text-white pl-3 border border-white rounded-lg" 
                            type="password" 
                            placeholder="Enter Your Password" 
                        />
                    </div>

                    <div className="flex justify-between w-97 text-lg">
                        <label className="text-gray-300 gap-1.5 flex">
                            <input type="checkbox" />
                            <p>Remember me</p>
                        </label>
                        <p className="text-gray-300 text-lg">Forgot password?</p>
                    </div>

                    <button 
                        type="submit" 
                        className="text-white bg-gray-700 hover:bg-gray-800 outline-none h-10 w-40 p-7 rounded-full flex items-center justify-center text-lg transition duration-300"
                    >
                        Log in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
