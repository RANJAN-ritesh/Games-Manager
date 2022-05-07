import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/homepage.css"
import { useDispatch } from "react-redux"
import { addCompleted } from "../redux/action"

export const Homepage = ()=>{
    const [dataArr,SetDataArr] = useState([])
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
                      <p>Name : {e.gameName}</p>
                     <p>Type : {e.type}</p>
                     <p>Developer : {e.developer}</p>
                     <p>Rating : {e.rating}</p>
                     <div className="mapBtnDiv">
                     <button onClick={()=>HandleDelete(e._id)}>Delete</button>
                     <button onClick={()=>HandleCompleted(e)}>Completed</button>
                     </div>
                    
                      </div>
                      
                  </div>
                  )
              })
          }
        </div>
    )
}