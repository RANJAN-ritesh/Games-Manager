import { useNavigate } from "react-router-dom"
import "../styles/Navbar.css"

export const Navbar = ()=>{
    const navigate = useNavigate()
    return(
        <div className="Navbar">
        <div className="NavParent" >
        <div style={{display:"flex"}}>
        <img src="https://img.icons8.com/external-dreamcreateicons-flat-dreamcreateicons/66/000000/external-game-nft-dreamcreateicons-flat-dreamcreateicons.png"/>
        <span style={{fontSize:"2rem",color:"orangered",fontWeight:"650",marginLeft:"1rem"}}>GAMES MANAGER</span>
        </div>
        
        <div className="routeBtns">
            <button onClick={()=>navigate("/")}>Games Playlist</button>
            <button onClick={()=>navigate("/input")}>Add Games</button>
            <button onClick={()=>navigate('/completed')}>Completed Games</button>
        </div>
        </div>
        
        </div>
    )
}