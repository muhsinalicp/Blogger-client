import { BiSolidLeaf } from "react-icons/bi";
import { useNavigate } from "react-router-dom"

function Navbar() {

    const nav = useNavigate();


    return (
        <div className='px-8 py-4 flex justify-between'>
            <div className='font-display text-3xl text-white  flex gap-2'><BiSolidLeaf className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]" color="green" />WanderLeaf</div>
            <div className='flex gap-2'>
                <button onClick={() => nav("/signin")} className="bg-white px-4 py-2 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">Sign In</button>
                <button onClick={() => nav("/signup")} className="bg-black text-white px-4 py-2 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer">Sign Up</button>
            </div>
        </div>
    )
}

export default Navbar