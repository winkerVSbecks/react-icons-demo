import React from 'react';
import './App.css';
import { Icons } from './icons';

function App() {
  return (
    <div className="App">
      <div>
        <Icons.Activity color="red" fontSize="12px" aria-hidden />
        <Icons.Airplay color="orange" fontSize="16px" aria-hidden />
        <Icons.AlertCircle color="gold" fontSize="20px" aria-hidden />
        <Icons.AlertOctagon color="green" fontSize="24px" aria-hidden />
        <Icons.Activity color="blue" fontSize="28px" aria-hidden />
        <Icons.Airplay color="indigo" fontSize="32px" aria-hidden />
        <Icons.AlertCircle color="violet" fontSize="36px" aria-hidden />
      </div>
    </div>
  );
}

export default App;
