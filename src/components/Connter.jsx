import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment2 = () => setCount((previousCount) => previousCount + 1);
  const decrement2 = () => setCount((previousCount) => previousCount - 1);
  const reset = () => setCount(0);

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>+1</button>
      </div>

      <div>
        <button onClick={reset}>reset</button>
      </div>
    </>
  );
};

export default Counter;
