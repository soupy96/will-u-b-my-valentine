import { useState } from 'react';
import bearCuteLove from './assets/cute-love.gif';
import kissingBear from './assets/bear-kisses.gif';
import heartPNG from './assets/heart-og.png';
import heartYes from './assets/heart-yes.png';

function App() {
  let [yes, setYes] = useState(false);
  let [noNum, setNoNum] = useState(0);
  let [heartWidth, setheartWidth] = useState(100);
  let [heartHeight, setheartHeight] = useState(90);

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
      let noIncrement = noNum;
      noIncrement++;
      setNoNum(noIncrement);

      let heartWU = heartWidth + 30;
      let heartHU = heartHeight + 30;
      setheartWidth(heartWU);
      setheartHeight(heartHU);
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
          <div className='w-full flex justify-around items-center'>
            <div
              className='cursor-pointer bg-contain bg-no-repeat'
              onClick={yesButt}
              style={{
                backgroundImage: `url(${heartYes})`,
                width: heartWidth,
                height: heartHeight,
              }}
            ></div>
            {noNum === 0 && !yes ? (
              <div
                className='heart cursor-pointer select-none'
                onClick={noButt}
                style={{
                  backgroundImage: `url(${heartPNG})`,
                }}
              >
                <p>No</p>
              </div>
            ) : (
              <div
                className='bg-gray-400 px-4 flex items-center justify-center cursor-pointer select-none h-20'
                onClick={noButt}
              >
                {noArray[noNum]}
              </div>
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
