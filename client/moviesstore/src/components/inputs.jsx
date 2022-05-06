import { useState } from "react"
import axios from "axios"
import "../styles/input.css"

export const Inputs = ()=>{
    let [name,setName] = useState("")
    let [poster,setPoster] = useState("")
    let [rating,setRating] = useState(0)
    let [director,setDirector] = useState("")

    function handleName(e){
        setName(e)
    }
    function handlePoster(e){
        setPoster(e)
    }
    function handleRating(e){
        if(e <= 5 && e >= 0 ){
            setRating(e)
        }else{
            alert("The Rating must be out of 5")
            setRating(0)
        }
    }
    function handleDirector(e){
        setDirector(e)
    }
    function handleSave(){
        // const payload = 
        // console.log(payload)
        // axios('http://localhost:3001/', {
        //     method: 'POST',
        //     headers: {'Content-Type':'application/json'}, // this line is important, if this content-type is not set it wont work
        //     body: JSON.stringify({
        //         "movieName":name,
        //         "movieUrl":poster,
        //         "rating":rating,
        //         "director":director
        //     })
        // });
        if(name != "" && poster != "" && rating >=0 && rating<=5 && director != ""){
            axios.post('http://localhost:3001/', {
                "movieName":name,
                        "movieUrl":poster,
                        "rating":rating,
                        "director":director
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            console.log("done")
            alert(`${name} saved in WatchList`)
        }else{
            alert("Please fill all the fields and keep ratings out of 5")
        }
        
        // axios.get("http://localhost:3001")
        // // .then((res)=>res.json())
        // .then((res)=>console.log(res.data))
        // console.log("done twice")
        
    }

    return(
        <div className="InputDiv">
        <div>
            <label>Movie Name :</label>
            <input type="text"  onChange={(e)=>handleName(e.target.value)}/>
        </div>
        <div>
            <label>Movie Poster :</label>
            <input type="text" placeholder="paste the URL Here"  onChange={(e)=>handlePoster(e.target.value)}/>
        </div>
        <div>
            <label>Rating :</label>
            <input type="number" value={rating} max="5" min="0" placeholder="Rate the movie"  onChange={(e)=>handleRating(e.target.value)}/>
        </div>
        <div>
            <label>Director :</label>
            <input type="text" placeholder="Directed by" onChange={(e)=>handleDirector(e.target.value)}/>
        </div>
        <button onClick={handleSave}>Save Movie</button>
        </div>
    )
}