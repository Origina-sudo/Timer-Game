import { useState ,useRef} from "react"
// let timer;
import ResultModal from "./ResultModal"

const TimerChallenge = ({title,targetTime}) => {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, settimeRemaining] = useState(targetTime * 1000);
    const timerisActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  function handleStart() {
    timer.current =setInterval(()=>{
    settimeRemaining(previousRemaining=> previousRemaining - 10);
    },10); 
   }

   function handleStop() {
          clearTimeout(timer.current);
   }
  
  return (
    <>  
      <ResultModal ref ={dialog} targetTime={targetTime} result="Lost"/>
      <section className="challenge">
        <h2>{title}</h2>

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
    </>

  )
}
 
export default TimerChallenge