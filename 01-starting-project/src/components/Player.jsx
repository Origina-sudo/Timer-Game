import { useState,useRef } from "react";
export default function Player() {
const playeName = useRef()
const [enteredPlayerName , setEnteredPlayerName] = useState(null)
 
 function handleClick (){
       setEnteredPlayerName(playeName.current.value);
       playeName.current.value = "";
 }
  return ( 
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playeName} 
        type="text"  />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );

