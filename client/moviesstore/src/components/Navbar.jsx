import { useNavigate } from "react-router-dom"
import "../styles/Navbar.css"

export const Navbar = ()=>{
    const navigate = useNavigate()
    return(
        <div className="Navbar">
            <button onClick={()=>navigate("/")}>Games Playlist</button>
            <button onClick={()=>navigate("/input")}>Add Games</button>
            <button onClick={()=>navigate('/completed')}>Completed Games</button>
        </div>
    )
}