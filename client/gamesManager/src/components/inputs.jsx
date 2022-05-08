import { useState } from "react"
import axios from "axios"
import "../styles/input.css"

export const Inputs = ()=>{
    let [name,setName] = useState("")
    let [poster,setPoster] = useState("")
    let [rating,setRating] = useState(0)
    let [director,setDirector] = useState("")
    let [developer,setDeveloper] = useState("")

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
    function handleDeveloper(e){
        setDeveloper(e)
    }
    function handleSave(){
        // const payload = 
        // console.log(payload)
        // axios('http://localhost:3001/', {
        //     method: 'POST',
        //     headers: {'Content-Type':'application/json'}, // this line is important, if this content-type is not set it wont work
        //     body: JSON.stringify({
        //         "gameName":name,
        //         "gameUrl":poster,
        //         "rating":rating,
        //         "director":director
        //     })
        // });
        if(name != "" && poster != "" && rating >=0 && rating<=5 && director != ""){
            axios.post('http://localhost:3001/', {
                        "gameName":name,
                        "gameUrl":poster,
                        "rating":rating,
                        "type":director,
                        "developer":developer,
                        "completion":"0"
                        
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            console.log("done")
            alert(`${name} saved in PlayList`)
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
            <label >GAME NAME :</label>
            <input type="text"  onChange={(e)=>handleName(e.target.value)}/>
        </div>
        <div>
            <label>GAME POSTER :</label>
            <input type="text" placeholder="paste the URL Here"  onChange={(e)=>handlePoster(e.target.value)}/>
        </div>
        <div>
            <label>DEVELOPER :</label>
            <input type="text" placeholder="Developed by" onChange={(e)=>handleDeveloper(e.target.value)}/>
        </div>
        <div>
            <label>RATING :</label>
            <input type="number" value={rating} max="5" min="0" placeholder="Rate the game"  onChange={(e)=>handleRating(e.target.value)}/>
        </div>
        <div>
            <label>TYPE :</label>
            {/* <input type="text" placeholder="Game Type" /> */}
            <select onChange={(e)=>handleDirector(e.target.value)}>
                <option>Game Type</option>
                <option>FPS Campaign</option>
                <option>FPS Online</option>
                <option>Open - World FPS</option>
                <option>Open - World RPG</option>
                <option>Open World Campaign</option>
                <option>Open World Online</option>
                <option>Level Based</option>
                <option>Others</option>
            </select>
        </div>
        <button onClick={handleSave}>SAVE GAME</button>
        </div>
    )
}