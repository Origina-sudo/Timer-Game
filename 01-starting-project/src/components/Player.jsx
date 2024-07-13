import { useState,useRef } from "react";
export default function Player() {
  const playeName = useRef(second)
const [enteredPlayerName , setEnteredPlayerName] = useState(null)
const [submitted, setsetsubmitted] = useState(false)

 function handleChange (event){
         setsetsubmitted(false)
        setEnteredPlayerName(event.target.value);
 }
 
 function handleClick (){
    setsetsubmitted(true)
 }
  return ( 
    <section id="player">
      <h2>Welcome {submitted ? enteredPlayerName :  'unknown entity'}</h2>
      <p>
        <input ref={playeName} 
        type="text" 
        onChange={handleChange} 
        value={enteredPlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
