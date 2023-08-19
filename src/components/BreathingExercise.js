import React, { useState, useEffect } from 'react';
import './BreathingExercise.css';
import Wave from 'react-wavify'
import Sound from 'react-sound';
// import backgroundMusic from '../bg.mp3'
import ReactPlayer from 'react-player';

const BreathingExercise = () => {
  const [phase, setPhase] = useState('inhale');
  const [timeLeft, setTimeLeft] = useState(4);

  useEffect(() => {
    if (timeLeft === 0) {
      if (phase === 'inhale') {
        setPhase('hold');
        setTimeLeft(7);
      } else if (phase === 'hold') {
        setPhase('exhale');
        setTimeLeft(8);
      } else if (phase === 'exhale') {
        setPhase('inhale');
        setTimeLeft(4);
      }
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, phase]);

  return (
    <div>
    <div className="breathing-exercise">
      <div className={`circle ${phase}`}>
      
        <div className="inner-circle" />
      </div>
      <h1>{phase}</h1>
      <p>Time Left: {timeLeft}</p>
     <div>
    
     </div>
    </div>
      <button onClick={() => setTimeLeft(0)}>Skip</button>
      <div className="wave-container">
        <Wave
          fill="#ffffff"
          paused={false}
          options={{
            height: 80,
            amplitude: 30,
            speed: 0.15,
            points: 10,
          }}
        />
      </div>
      <div>
      {/* <ReactSound
        url="/public/bg.mp3"
        playStatus="PLAYING"
        playFromPosition={0}
      /> */}
       {/* <Sound
        url={backgroundMusic}
        playStatus={Sound.status.PLAYING} // Auto-play the background music
        loop // Loop the audio
      /> */}
      <ReactPlayer
        url="/bg.mp3"
        playing // Auto-play the background music
        loop // Loop the audio
        width="0"
        height="0"
      />
    </div>
      </div>
  );
};

export default BreathingExercise;
