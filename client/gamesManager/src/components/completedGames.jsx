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
                      <p><span className="detailsSpan">NAME : </span>{e.gameName}</p>
                     <p><span className="detailsSpan">TYPE :</span> {e.type}</p>
                     <p><span className="detailsSpan">DEVELOPER : </span>{e.developer}</p>
                     {/* <p ><span className="detailsSpan">RATING : </span>{e.rating}</p> */}
                     <p><span className="detailsSpan">RATING :</span> {e.rating} <span style={{marginLeft:"5.5rem",fontWeight:"700",fontSize:"1.2rem",color:"green",border:"2.5px solid green",
                                                          padding:"0.1rem 0.6rem",borderRadius:"0.9rem"}}>GAME COMPLETED</span></p>
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