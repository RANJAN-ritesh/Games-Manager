import { useSelector } from "react-redux"

export const CompletedGames = ()=>{
    let Flag = false;
    const gamesArr = useSelector((state)=>state.completedGames)
    console.log(gamesArr)
    if(gamesArr.length == 0){
        Flag = true;
    }

    function HandleDelete(e){
        console.log(e)
    }
    return (
        <div className="MapParent">
          { 
              Flag ? "No Completed Games Yet" :
              gamesArr.map((e)=>{
                  return(
                    <div className="MoviesDiv">
                      <div className="imgDiv">
                      <img src={e.gameUrl} alt="img"/>
                      </div>
                      <div className="detailsDiv">
                      <p>Name : {e.gameName}</p>
                     <p>Type : {e.type}</p>
                     <p>Developer : {e.developer}</p>
                     <p>Rating : {e.rating} <span style={{marginLeft:"5.5rem",fontWeight:"700",fontSize:"1.1rem",color:"green",border:"2px solid green",padding:"0.1rem 0.6rem",borderRadius:"0.9rem"}}>GAME COMPLETED</span></p>
                     <div className="mapBtnDiv">
                     <button onClick={()=>HandleDelete(e._id)}>Delete</button>
                     </div>
                    
                      </div>
                      
                  </div>
                  )
              })
          }
        </div>
    )
}