import React, { useState } from "react";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Email is", email)
        console.log("Password is", password)

        setEmail("")
        setPassword("")
    }


  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-md border border-emerald-600/40 rounded-2xl shadow-xl p-10">
        
        <h2 className="text-3xl font-semibold text-center text-emerald-600 mb-8">
          Welcome Back
        </h2>

        <form
        onSubmit={(e)=>{
            submitHandler(e)
        }} 
        className="flex flex-col gap-5"
        >
          
          <input
            required
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            type="email"
            placeholder="Enter your Email"
            className="w-full border-2 border-emerald-500 rounded-full px-5 py-3 text-lg outline-none 
                       focus:ring-1 focus:ring-emerald-400 focus:border-emerald-600 
                       transition-all duration-300"
          />

          <input
            required
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            type="password"
            placeholder="Enter Password"
            className="w-full border-2 border-emerald-500 rounded-full px-5 py-3 text-lg outline-none 
                       focus:ring-1 focus:ring-emerald-400 focus:border-emerald-600 
                       transition-all duration-300"
          />

          <button
            className="w-full bg-emerald-600 text-white font-semibold rounded-full px-5 py-3 text-lg 
                       hover:bg-emerald-700 active:scale-95 transition-all duration-300 
                       shadow-md cursor-pointer"
          >
            Log In
          </button>

        </form>

      </div>
    </div>
  );
};

export default Login;