import React, { useState } from 'react';
import './style.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setInput = (setter) => (event) => {
    setter(event.currentTarget.value);
  };

  return (
    <form>
      <input value={username} onChange={setInput(setUsername)} />
      <input
        type="password"
        value={password}
        onChange={setInput(setPassword)}
      />
    </form>
  );
}

export default App;
