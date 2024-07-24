import { useState } from "react"
let timer;

const TimerChallenge = ({title,targetTime}) => {
  const [timerStarted, settimerStarted] = useState(false)
  const [timerExpired, settimerExpired] = useState(false) 

  function handleStart() {
   settimerStarted(true);
    timer =setTimeout(()=>{
      settimerExpired(true);
    },targetTime * 1000)
   }

   function handleStop() {
          clearTimeout(timer);
   }
  
  return (
    <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost</p>}
        <p className="challenge-time">
         {targetTime} second{targetTime > 1 ? "s" :""}
        </p>
        <p>
            <button onClick={timerStarted ? handleStop : handleStart}>
                {timerStarted ? "Stop" : "Start"} Challenge
            </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
            {timerStarted ? "Time is Running..." : "Timer Inactive"}
        </p>
    </section>
  )
}
 
export default TimerChallenge