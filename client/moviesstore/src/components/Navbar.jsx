import { useNavigate } from "react-router-dom"

export const Navbar = ()=>{
    const navigate = useNavigate()
    return(
        <div>
            <button onClick={()=>navigate("/")}>Home</button>
            <button onClick={()=>navigate("/input")}>Form</button>
        </div>
    )
}