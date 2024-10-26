import './App.css';

import React, { useState } from 'react';

function App() {
const [value, setValue] = useState(0);

function increment(value) {
  setValue(value => value + 1);
}
function decrement(value) {
  setValue(value => value - 1);
}

  return (
    <div className="App">
      <button style={{backgroundColor: "green"}} onClick={() => increment(value)}>+</button>
      <p>{value}</p>
      <button style={{backgroundColor: "red"}} onClick={() => decrement(value)}>-</button>
    </div>
  );
}

export default App;
