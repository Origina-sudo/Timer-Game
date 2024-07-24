import { useState } from "react"


const TimerChallenge = ({title,targetTime}) => {
  const [timerExpired, settimerExpired] = useState(false) 
  function handleStart() {
    setTimeout(()=>{
      settimerExpired(true);
    },targetTime * 1000)
   }
  
  return (
    <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You Lost</p>}
        <p className="challenge-time">
         {targetTime} second{targetTime > 1 ? "s" :""}
        </p>
        <p>
            <button>
                Start Challenge
            </button>
        </p>
        <p className="">
            Time is running..../ Timer inactive
        </p>
    </section
  )
}
 
export default TimerChallenge