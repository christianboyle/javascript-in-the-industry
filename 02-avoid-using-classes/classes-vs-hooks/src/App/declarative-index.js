import React, { useState } from 'react';

export function DeclarativeShowCount() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevState) => prevState + 1);
  }

  return (
    <div>
      <p> Count: {count} </p>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default DeclarativeShowCount;
