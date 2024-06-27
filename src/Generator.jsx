import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Css/gen.css';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceId, setAdviceId] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const response = await axios.get('https://api.adviceslip.com/advice');
      setAdvice(response.data.slip.advice);
      setAdviceId(response.data.slip.id);
    } catch (error) {
      console.error('Error fetching advice:', error);
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="advice-id">ADVICE #{adviceId}</h1>
        <p className="advice">{advice}</p>
        <img className='divider' src="/src/advice-generator-app-main/images/pattern-divider-desktop.svg" alt="" />
        <button className="dice-button" onClick={fetchAdvice}>
          <img src="/src/advice-generator-app-main/images/icon-dice.svg" alt="Dice Icon" />
        </button>
      </div>
    </div>
  );
}

export default App;
