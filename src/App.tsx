import { useState } from 'react';
import bearCuteLove from './assets/cute-love.gif';
import kissingBear from './assets/bear-kisses.gif';

function App() {
  let [yes, setYes] = useState(false);
  let [noNum, setNoNum] = useState(0);

  const noArray = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Think again!',
    'Last chance!',
    'Surely not?',
    'You might regret this!',
    'Give it another thought!',
    'Are you absoluty serious?',
    'This could be a mistake!',
    'Have a heart',
    "Don't be so cold",
    'Change of heart?',
    "Wouldn't you reconsider",
    "Is that You're final anwser?",
    "You're breaking my heart :(",
  ];

  const noButt = () => {
    if (noNum <= 14) {
      let test = noNum;
      test++;
      setNoNum(test);
      console.log(noNum);
    } else if (noNum > 14) {
      setNoNum(1);
    }
  };

  const yesButt = () => {
    setYes(true);
  };

  return (
    <section className=' h-screen bg-red-50 flex items-center justify-center flex-col text-center text-3xl'>
      <div className='flex items-center justify-center flex-col child:p-4'>
        <div>
          {yes ? (
            <img src={kissingBear} alt='kisisng bears' />
          ) : (
            <img src={bearCuteLove} alt='bear with rose and hearts' />
          )}
        </div>
        {!yes ? <h1>Will you be my Valentine?</h1> : <h1>Luv U 🥰</h1>}
        {!yes ? (
          <div className='w-full flex justify-around'>
            <button className='heart' onClick={yesButt}>
              <p>Yes</p>
            </button>
            {noNum === 0 && !yes ? (
              <button onClick={noButt} className='heart'>
                <p>No</p>
              </button>
            ) : (
              <button className='bg-gray-400 px-4 pt-0' onClick={noButt}>
                {noArray[noNum]}
              </button>
            )}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </section>
  );
}

export default App;
