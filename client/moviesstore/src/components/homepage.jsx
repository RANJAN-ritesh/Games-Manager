import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/homepage.css"

export const Homepage = ()=>{
    const [dataArr,SetDataArr] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001")
        // .then((res)=>res.json())
        .then((res)=>SetDataArr(res.data))
    },[])

    // console.log(dataArr)

    function HandleDelete(id){
        axios.delete(`http://localhost:3001/${id}`,{
            "_id":id
        })
        window.location.reload(false)
    }
    return(
        <div className="MapParent">
          {
              dataArr.map((e)=>{
                  return(
                    <div className="MoviesDiv">
                      <div className="imgDiv">
                      <img src={e.movieUrl} alt="img"/>
                      </div>
                      <div className="detailsDiv">
                      <p>Name : {e.movieName}</p>
                     <p>Director : {e.director}</p>
                     <p>Rating : {e.rating}</p>
                     <button onClick={()=>HandleDelete(e._id)}>Delete</button>
                      </div>
                      
                  </div>
                  )
              })
          }
        </div>
    )
}