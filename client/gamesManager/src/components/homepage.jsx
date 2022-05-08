import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/homepage.css"
import { useDispatch } from "react-redux"
import { addCompleted } from "../redux/action"

export const Homepage = ()=>{
    const [dataArr,SetDataArr] = useState([])
    const [completionFlag,setCompletionFlag] = useState(false)
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
        setCompletionFlag(true)
    }
    function HandleEdit(e){
        console.log(e)
        console.log(editcompletion)
        let id = e._id
        axios.patch(`http://localhost:3001/${id}`,{
            "completion":editcompletion
        })
        alert("Completion Percent Edited")
        setCompletionFlag(false)
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
                      <p><span className="detailsSpan">Name : </span>{e.gameName}</p>
                     <p><span className="detailsSpan">Type :</span> {e.type}</p>
                     <p><span className="detailsSpan">Developer : </span>{e.developer}</p>
                     <p ><span className="detailsSpan">Rating : </span>{e.rating}</p>
                     <div className="editDiv">
                     {
                     !completionFlag ?  <p><span className="detailsSpan" style={{color:"midnightblue"}}>Completion : </span>{e.completion} %</p>   : <div className="editingDiv">
                    
                     <input type="Number" placeholder="Edit completion %" onChange={(e)=>setEditCompletion(e.target.value)}/>
                     <button onClick={()=>HandleEdit(e)}>Edit</button></div> 
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