import { useNavigate } from "react-router-dom"
import "../styles/Navbar.css"

export const Navbar = ()=>{
    const navigate = useNavigate()
    return(
        <div className="Navbar">
        <div className="NavParent" >
        <div style={{display:"flex"}}>
        <img src="https://img.icons8.com/external-dreamcreateicons-flat-dreamcreateicons/62/000000/external-game-nft-dreamcreateicons-flat-dreamcreateicons.png" style={{marginTop:"-0.5rem"}}/>
        <span style={{fontSize:"2rem",color:"orangered",fontWeight:"950",marginLeft:"1rem"}}>GAMES MANAGER</span>
        </div>
        
        <div className="routeBtns">
            <button onClick={()=>navigate("/")}>GAMES PLAYLIST</button>
            <button onClick={()=>navigate("/input")}>ADD GAMES</button>
            <button onClick={()=>navigate('/completed')}>COMPLETED GAMES</button>
        </div>
        </div>
        
        </div>
    )
}