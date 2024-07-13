import { useState } from "react";
export default function Player() {
const [enteredPlayerName , setEnteredPlayerName] = useState('')

 function handleChange (event){
        setEnteredPlayerName(event.target.value);
 }
  return (
    <section id="player">
      <h2>Welcome unknown entity</h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPlayerName} />
        <button>Set Name</button>
      </p>
    </section>
  );
}
