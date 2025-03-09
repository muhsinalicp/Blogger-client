import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { GoEyeClosed } from "react-icons/go";
import { RxEyeOpen } from "react-icons/rx";
import { registerUser } from "../../queryOptions/Register";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

    const nav = useNavigate();
    const [err, setErr] = useState({});
    const [breadcrumbs, setBreadcrumbs] = useState(false);

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {  

            if (data.message === "User created successfully") 
                {
                    setBreadcrumbs(true);
                    setTimeout(() => {
                        setBreadcrumbs(false);
                        nav("/");
                    }, 2000);
                }

        },
        onError: (error) => {
            if (error.message === "Email already exists") {
                setErr({ email: "Email already exists, use another one" });
            }
            if (error.message === "Username already exists") {
                setErr({ username: "Username already exists, use another one" });
            }
        }
    })


    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: ""
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Enter your email",
            errorMessage: "It should be a valid email address",
            label: "Email",
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters, including at least 1 letter, 1 number, and 1 special character",
            label: "Password",
            pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
            required: true
        },
        {
            id: 3,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm password",
            errorMessage: "Passwords don't match",
            label: "Confirm Password",
            required: true
        },
        {
            id: 4,
            name: "username",
            type: "text",
            placeholder: "Create a username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special characters",
            label: "Username",
            pattern: /^[A-Za-z0-9]{3,16}$/,
            required: true
        }
    ];

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let newErrors = {};

        inputs.forEach((input) => {
            if (input.required && !formData[input.name]) {
                newErrors[input.name] = `${input.label} is required`;
            }
            if (input.pattern && formData[input.name]) {
                if (!input.pattern.test(formData[input.name])) {
                    newErrors[input.name] = input.errorMessage;
                }
            }
        });

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords don't match";
        }

        setErr(newErrors);

        if (Object.keys(newErrors).length === 0) {
            mutation.mutate(formData);
        }
    }



    return (
        
        <div className="bg-[url('/src/assets/signup.jpg')] h-screen w-screen bg-cover">
            <div className="bg-black/60 h-full w-full flex justify-center items-center">
                <div className="w-3/4 h-3/4 bg-white/10 backdrop-blur-sm rounded-xl grid grid-cols-2">
                    <div className="w-full h-full rounded-l-xl bg-[url('/src/assets/signimg.jpg')] bg-center bg-cover">
                    </div>
                    <div className="w-full h-full rounded-r-xl bg-white flex flex-col items-center py-4">
                        <h1 className="flex items-center gap-2 font-bold text-3xl">
                            <BiSolidLeaf color="green" /> Wanderleaf
                        </h1>
                        <h4 className="text-sm text-gray-900 font-medium ml-4">Create an account</h4>
                        <form onSubmit={handleSubmit} className="w-full h-[70%] flex flex-col gap-4 justify-center items-center">
                            {inputs.map((input) => (
                                <div key={input.id} className="flex flex-col w-3/4 relative">
                                    <input
                                        onChange={handleChange}
                                        type={showPassword[input.name] ? "text" : input.type}
                                        name={input.name}
                                        className="w-full py-2 border-b border-black focus:outline-none focus:placeholder-transparent"
                                        placeholder={input.placeholder}
                                        required={input.required}
                                    />
                                    {input.type === "password" && (
                                        <div
                                            className="absolute right-4 cursor-pointer"
                                            onClick={() =>
                                                setShowPassword((prev) => ({
                                                    ...prev,
                                                    [input.name]: !prev[input.name]
                                                }))
                                            }
                                        >
                                            {showPassword[input.name] ? <RxEyeOpen size={24} /> : <GoEyeClosed size={24} />}
                                        </div>
                                    )}
                                    {err[input.name] && <p className="text-red-500 text-xs mt-1">{err[input.name]}</p>}
                                </div>
                            ))}
                            <button type="submit" className="bg-black text-white w-3/4 px-4 py-2 rounded-md cursor-pointer">{mutation.isLoading ? "Signing up..." : "Sign Up"}</button>
                        <span>Already have an account? <Link to="/signin" className="text-blue-500">Sign In</Link></span>
                        </form>
                    </div>
                </div>
            </div>


            {breadcrumbs &&
                <div className="bg-white backdrop-blur-xl fixed right-4 bottom-4 border-2 border-black flex items-center gap-2 px-4 py-2 rounded-md">
                    User Registered Successfully
                </div>}



        </div>
    );
}
