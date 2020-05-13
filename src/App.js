import React, {useEffect} from 'react';

function App() {

  const buttonInfo = [
    {
      key: 'bass',
      letter: 'Q',
      smallLetter: 'q',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
      key: 'floor-tom',
      letter: 'W',
      smallLetter: 'w',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
      key: 'snare',
      letter: 'E',
      smallLetter: 'e',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
      key: 'tom-tom',
      letter: 'A',
      smallLetter: 'a',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
      key: 'hi-hat',
      letter: 'S',
      smallLetter: 's',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
      key: 'crash',
      letter: 'D',
      smallLetter: 'd',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
      key: 'ride',
      letter: 'Z',
      smallLetter: 'z',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    {
      key: 'splash',
      letter: 'X',
      smallLetter: 'x',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
      key: 'china',
      letter: 'C',
      smallLetter: 'c',
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    }
  ];

  const playSound = (letter) => {
    const sound = document.getElementById(letter);
    sound.play();
  }

  useEffect(() => {
    function pressKey(event){
      if (buttonInfo.map(info => info.smallLetter).some(letter => letter === event.key || 'Key' + letter.toUpperCase() === event.code)) {
        playSound(event.key.toUpperCase());
      }
    };
    window.addEventListener("keydown", pressKey);
    return () => window.removeEventListener("keydown", pressKey);
  }, [buttonInfo]) 

  return (
    <div id="drum-machine">
      {buttonInfo.map(info => {
        return (
          <button className="drum-pad" id={info.key} onClick={() => playSound(info.letter)}>{info.letter}
            <audio className="clip" id={info.letter} src={info.url} />
          </button>
        )
      })}

      <div id="display">
      </div>
    </div>
  );
}

export default App;
