import { useState, useRef, useEffect } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [timerIsActive, setTimerIsActive] = useState(false);

  // Use effect to handle the timer updates
  useEffect(() => {
    if (timerIsActive && timeRemaining > 0) {
      timer.current = setInterval(() => {
        setTimeRemaining(prev => prev - 10);
      }, 10);
      return () => clearInterval(timer.current); // Cleanup interval on component unmount or when time is active changes
    } else if (timeRemaining <= 0) {
      clearInterval(timer.current);
      dialog.current.open(); // Open the modal when time is up
    }
  }, [timerIsActive, timeRemaining]);

  const handleStart = () => {
    setTimerIsActive(true);
  };

  const handleStop = () => {
    setTimerIsActive(false);
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
    setTimerIsActive(false);
  };

  return (
    <>
      <ResultModal 
        ref={dialog} 
        targetTime={targetTime} 
        remainingTime={timeRemaining} 
        onReset={handleReset} 
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop Challenge' : 'Start Challenge'}
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is Running...' : 'Timer Inactive'}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
