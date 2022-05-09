import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/homepage.css"
import { useDispatch } from "react-redux"
import { addCompleted } from "../redux/action"

export const Homepage = ()=>{
    const [dataArr,SetDataArr] = useState([])
    const [completionFlag,setCompletionFlag] = useState(null)
    const [editcompletion,setEditCompletion] = useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
        axios.get("http://localhost:3001")
        // .then((res)=>res.json())
        .then((res)=>SetDataArr(res.data))
    },[dataArr])

    // console.log(dataArr)

    function HandleDelete(id){
        axios.delete(`http://localhost:3001/${id}`,{
            "_id":id
        })
        // window.location.reload(false)
    }

    function HandleCompleted(e){
        console.log(e)
        const data = addCompleted(e)
        dispatch(data)
        // console.log("dispatched")
       
        let id = e._id
        axios.delete(`http://localhost:3001/${id}`,{
            "_id":id
        })
        alert("Game Added To Complete Games List")
    }
    function HandleSetEdit(e){
        setCompletionFlag(e._id)
    }
    function HandleEdit(e){
        console.log(e)
        console.log(editcompletion)
        let id = e._id
        axios.patch(`http://localhost:3001/${id}`,{
            "completion":editcompletion
        })
        alert("Completion Percent Edited")
        setCompletionFlag(null)
    }
    return(
        <div className="MapParent">
          {
              dataArr.map((e)=>{
                  return(
                    <div className="MoviesDiv">
                      <div className="imgDiv">
                      <img src={e.gameUrl} alt="img"/>
                      </div>
                      <div className="detailsDiv">
                      <p><span className="detailsSpan">NAME : </span>{e.gameName}</p>
                     <p><span className="detailsSpan">TYPE :</span> {e.type}</p>
                     <p><span className="detailsSpan">DEVELOPER : </span>{e.developer}</p>
                     <p ><span className="detailsSpan">RATING : </span>{e.rating}</p>
                     <div className="editDiv">
                     {
                     completionFlag == e._id
                      ?<div className="editingDiv">
                    
                     <input type="Number" placeholder="EDIT COMPLETION %" onChange={(e)=>setEditCompletion(e.target.value)}/>
                     <button onClick={()=>HandleEdit(e)}>EDIT</button></div> 

                     :   <p><span className="detailsSpan" style={{color:"midnightblue",fontWeight:"750"}}>COMPLETION  : </span>
                     <span style={{color:"red",fontSize:"1.4rem",fontWeight:"650",borderRadius:"0.5rem"}}>{e.completion} </span><span style={{color:"red",fontSize:"1.2rem",fontWeight:"600"}}>%</span>
                     </p> 
                     }
                    
                     </div>
                   
                     <div className="mapBtnDiv">
                     <button onClick={()=>HandleDelete(e._id)}>DELETE</button>
                     <button onClick={()=>HandleCompleted(e)}>COMPLETED</button>
                     <button onClick={()=>HandleSetEdit(e)}>EDIT COMPLETION %</button>
                     </div>
                    
                      </div>
                      
                  </div>
                  )
              })
          }
        </div>
    )
}