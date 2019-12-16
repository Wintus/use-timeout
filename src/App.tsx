import React from 'react';
import './App.css';
import { useTimeout } from "./hooks/useTimeout";

const App: React.FC = () => {
  const [count, setCount] = useTimeout(3, 0, 3000);

  return (
    <div className="App">
      <input type="number" value={count} />
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <button onClick={() => setCount(c => c - 1)}>-</button>
    </div>
  );
};

export default App;
