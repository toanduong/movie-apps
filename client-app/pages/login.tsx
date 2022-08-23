import Head from "next/head";
import React from "react";
import { useFetchMovies } from "../api/fetchHooks";
import Header from "../components/Header/Header";
import { FaGithub, FaGoogle, FaRegEnvelope  } from "react-icons/fa"
import { MdLockOutline } from "react-icons/md"
import { signIn } from "next-auth/react";

const Login = () => {
    const [query, setQuery] = React.useState("");

    return (
        <main>
            <Header setQuery={setQuery}/>
            <form method="POST" action="/api/login">
                <div className="flex flex-col justify-between items-center text-center mt-20 border-gray-300">
                    <div className="flex rounded-2xl shadow-2xl w-full max-w-4xl">
                        <div className="w-3/5 p-5">
                            <div className="text-cyan-500 text-left">NextJS<span className="text-zinc-600">Project</span></div>
                            <div className="py-4">
                                <h2 className="font-bold text-center text-3xl mt-4 mb-2 text-cyan-500">
                                    Sign in to Account
                                </h2>
                                <div className="w-10 h-1 borer-2 bg-cyan-500 inline-block mb-2"></div>
                                <div className="flex justify-center my-2">
                                    <a href="#" onClick={() => signIn("github")} className="border-2 border-cyan-300 text-cyan-500 rounded-full px-2 py-2 hover:bg-cyan-500 hover:text-white duration-300" >
                                        <FaGithub />
                                    </a>
                                    <a href="#" onClick={() => signIn("google")} className="border-2 border-cyan-300 text-cyan-500 rounded-full px-2 py-2 ml-2 hover:bg-cyan-500 hover:text-white duration-300" >
                                        <FaGoogle />
                                    </a>
                                </div>
                                <div className="text-cyan-500 my-3">
                                    Or your email account
                                </div>
                                <div className="flex flex-col items-center mb-3 ">
                                    <div className="bg-cyan-100 w-64 p-3 flex items-center rounded-md border border-cyan-500">
                                        <FaRegEnvelope className="text-gray-600 mr-2"/>
                                        <input type='email' name="email" placeholder="Email" className="text-gray-700 bg-transparent outline-none text-sm flex-1"/>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center mb-6 border-cyan-500 hover:border-cyan-800">
                                    <div className="bg-cyan-100 w-64 p-3 flex items-center rounded-md border border-cyan-500">
                                        <MdLockOutline className="text-gray-600 mr-2"/>
                                        <input type='password' name="password" placeholder="Password" className="text-gray-700 bg-transparent outline-none text-sm flex-1"/>
                                    </div>
                                </div>
                                <button type="submit" className="bg-transparent border border-cyan-500 py-2 px-12 rounded-full hover:text-white hover:bg-cyan-500 duration-300 font-semibold">Sign In</button>
                            </div>
                        </div>
                        <div className="w-2/5 bg-cyan-500 rounded-tr-2xl rounded-br-2xl py-36 px-12 text-white">
                            <h2 className="font-bold text-3xl mb-2">Hello, Friend!</h2>
                            <div className="w-10 h-1 borer-2 bg-white inline-block mb-2"></div>
                            <p className="mb-10">Fill up personal information and start journey with us</p>
                            <a href="#" className="bg-transparent border border-white py-2 px-12 rounded-full hover:text-cyan-500 hover:bg-white duration-300 font-semibold">Sign Up</a>
                        </div>
                    </div>
                </div>
            </form>
            
            
       
        </main>
    )
}

export default Login;