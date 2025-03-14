import { useContext } from "react";
import { BiSolidLeaf } from "react-icons/bi";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/context";
import { useQuery } from "@tanstack/react-query";
import { fetchUserDetails } from "../../queryOptions/fetchUserDetails";
import { MdLogout } from "react-icons/md";
import axios from "axios";

function Navbar() {

    const REACT_APP_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;

    const { data, isLoading, error } = useQuery({
        queryKey: ["aboutUser"],
        queryFn: fetchUserDetails,
    })

    const nav = useNavigate();
    const auth = useContext(AuthContext);

    async function handlelogout() 
    {
        try 
        {
            const {data} = await axios.get(`${REACT_APP_BASE_URL}/auth/logout`);
            if (data.message === "Logged out successfully") auth.setIsAuth(false);
        }
        catch (error) 
        {
            throw error.response?.data || { message: "Something went wrong" };
        }
    }



    return (
        <div className='px-8 py-4 flex justify-between'>
            <div className='font-display text-3xl text-white  flex gap-2'><BiSolidLeaf className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" color="green" />WanderLeaf</div>
            {auth.isAuth ? (
                <div className='flex gap-6 items-center'>
                    {data?.user &&
                        <div className='flex gap-6 items-center text-white'>
                            <div className="font-semibold cursor-pointer hover:scale-105 duration-300">
                                Blogs
                            </div>

                            <div onClick={() => nav("/profile")} className="font-semibold cursor-pointer hover:scale-105 duration-300">
                                Profile
                            </div>

                            <button className="cursor-pointer hover:scale-105 duration-300"
                            onClick={handlelogout}
                            >
                                <MdLogout size={32}/>
                            </button>
                        </div>
                    }
                </div>
            ) : (
                <div className='flex gap-2'>
                    <button onClick={() => nav("/signin")} className="bg-white px-4 py-2 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">Sign In</button>
                    <button onClick={() => nav("/signup")} className="bg-black text-white px-4 py-2 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">Sign Up</button>
                </div>
            )}
        </div>
    )
}

export default Navbar