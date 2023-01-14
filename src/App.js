import { Player1 } from './components/player1/player';
import { Player2 } from './components/player2/Player2';
import { Player3 } from './components/player3/player';
import './style/app.css'


function App() {
  return (
      <div id="app" className="app">
        <div id="player-1" className="player"><Player1 /></div>
        <div id="player-2" className="player"><Player2 /></div>
        <div id="player-3" className="player"><Player3/></div>
      </div>
  );
}

export default App;
