

const TimerChallenge = ({title,targetTime}) => {
  return (
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
         {targetTime} second{targetTime > 1 ? "s" :""}
        </p>
        <p>
            <button>
                
            </button>
        </p>
    </section>
  )
}

export default TimerChallenge