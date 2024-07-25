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

   if (timeRemaining <= 0){
        clearInterval(timer.current);
        settimeRemaining(targetTime * 1000);
        dialog.current.open();
   }
   function handleStop() {
    dialog.current.open();
          clearInterval(timer.current);
   }
  
  return (
    <>  
      <ResultModal ref ={dialog} targetTime={targetTime} remainingTime ={timeRemaining}/>
      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
         {targetTime} second{targetTime > 1 ? "s" :""}
        </p>
        <p>
            <button onClick={timerisActive ? handleStop : handleStart}>
                {timerisActive ? "Stop" : "Start"} Challenge
            </button>
        </p>
        <p className={timerisActive ? "active" : undefined}>
            {timerisActive ? "Time is Running..." : "Timer Inactive"}
        </p>
    </section>
    </>

  )
}
 
export default TimerChallenge