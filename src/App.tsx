import bearCuteLove from './assets/cute-love.gif';
import kissingBear from './assets/bear-kisses.gif';
// import './App.css';

function App() {
  return (
    <section className=' h-screen bg-red-50 flex items-center justify-center flex-col text-center text-3xl'>
      <div className='flex items-center justify-center flex-col child:p-4'>
        <div>
          <img src={bearCuteLove} alt='React logo' />
          <img className='hidden' src={kissingBear} alt='Vite logo' />
        </div>
        <h1>Will you be my Valentine?</h1>
        <div className='w-full flex justify-around'>
          <button className='heart'>
            <p>Yes</p>
          </button>
          <button className='heart'>
            <p>No</p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
