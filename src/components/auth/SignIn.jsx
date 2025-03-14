import { useMutation } from '@tanstack/react-query';
import React, { useContext, useState } from 'react'
import { BiSolidLeaf } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { signInUser } from '../../queryOptions/signIn';
import { AuthContext } from '../../context/context';
import { RxEyeOpen } from 'react-icons/rx';
import { GoEye, GoEyeClosed } from 'react-icons/go';

export default function SignIn() {

    const nav = useNavigate();

    const [show, setShow] = useState(false);

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const auth = useContext(AuthContext);

    const [err, setErr] = useState({});

    const mutation = useMutation({
        mutationFn: signInUser,
        onSuccess: (data) => {
            if (data.message === "Login successful") 
            {
                auth.setIsAuth(true);
                nav("/");
            }
        },
        onError: (error) => {
            if (error.message === "User not found") 
            {
                setErr({ username: "invalid username" });
                setTimeout(() => {
                    setErr({});
                },1000)
            }
            if (error.message === "Invalid password") 
            {
                setErr({ password: "Incorrect password" });
                setTimeout(() => {
                    setErr({});
                },1000)
            }
    }
    })

    const inputs = [
        {
            name: "username",
            label: "enter your username",
            type: "text",
            required: true,
        },
        {
            name: "password",
            label: "enter your password",
            type: "password",
            required: true,
        },
    ];


    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        mutation.mutate(form);
    }


    return (
        <div className="bg-[url('/src/assets/login.jpg')]  h-screen w-screen bg-cover ">

            <div className='w-full h-full bg-black/60 flex items-center justify-center'>

                <form onSubmit={handleSubmit} className='w-1/3 h-1/2 flex flex-col items-center justify-between  bg-white/20 backdrop-blur-sm rounded-2xl'>
                    <h1 className="flex items-center gap-2 py-4 font-bold text-3xl">
                        <BiSolidLeaf color="green" /> Wanderleaf
                    </h1>
                    <div className='w-3/4'>
                        {inputs.map((input) => (
                            <div key={input.name} className='flex flex-col items-center relative  py-2'>
                                <input 
                                    type={input.type === "password" ? show ? "text" : "password" : "text"}
                                    name={input.name}
                                    value={form[input.name]}
                                    placeholder={input.label}
                                    className="w-full py-2 border-b border-black focus:outline-none  focus:placeholder-transparent"
                                    onChange={handleChange} />
                                {input.type === "password" && (
                                   <div onClick={()=>setShow(!show)}>
                                    {show ?  <GoEyeClosed size={20} className='absolute bottom-10 right-2'/>:<GoEye size={20} className='absolute bottom-10 right-2'/>}
                                   </div>
                                )}
                                <div className='w-full h-4 text-center '>
                                    <p className="text-red-700 text-sm">{err[input.name]}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button type="submit" className="bg-black text-white w-3/4 px-4 py-2 rounded-md cursor-pointer">{mutation.isLoading ? "Signing In..." : "Sign In"}</button>

                    <span className='py-4'>Don't have an account?<Link to="/signup" className="text-blue-700 drop ml-1 underline cursor-pointer">Sign Up</Link></span>
                </form>

            </div>

        </div>
    )
}
