import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
       <TimerChallenge title="Easy" targetTime={1}/>
        <TimerChallenge title="Hard" targetTime={5}/>
        <TimerChallenge title="Difficult" targetTime={10}/>
        <TimerChallenge title="Hell-Mode" targetTime={15}/>
      </div>
    </>
  );
}

export default App;
