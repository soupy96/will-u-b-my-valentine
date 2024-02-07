import bearCuteLove from './assets/cute-love.gif';
import kissingBear from './assets/bear-kisses.gif';
// import './App.css';

function App() {
  return (
    <section className='child:p-4 h-screen bg-red-50 flex items-center justify-center flex-col text-center text-3xl'>
      <div>
        <img src={bearCuteLove} alt='React logo' />
        <img className='hidden' src={kissingBear} alt='Vite logo' />
      </div>
      <h1>Will you be my Valentine?</h1>
      <div className='w-1/4 flex justify-between'>
        <button>Yes</button>
        <button>No</button>
      </div>
    </section>
  );
}

export default App;
