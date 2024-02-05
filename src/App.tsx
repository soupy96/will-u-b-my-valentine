import bearCuteLove from './assets/cute-love.gif';
import kissingBear from './assets/bear-kisses.gif';
import './App.css';

function App() {
  return (
    <>
      <div>
        <img src={bearCuteLove} className='logo react' alt='React logo' />
        <img src={kissingBear} className='logo' alt='Vite logo' />
      </div>
      <h1>Will you be my valentine?</h1>
      <button>Yes</button>
      <button>No</button>
    </>
  );
}

export default App;
