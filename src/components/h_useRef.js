import React, { useRef, useState } from "react";

function UseRefHook() {
  const countElemRef = useRef(null);

  var count = useRef(0);
  const [counter, setCounter] = useState(count.current);

  function increaseCount() {
    // let cElem = countElemRef.current.innerHTML;
    setCounter((c) => c + 1);
    // setCounter((c) => Number(cElem) + 1);
  }

  function resetCount() {
    setCounter((c) => count.current);
  }
  return (
    <div>
      <h3>UseRef Hook</h3>
      <p>
        Count <span ref={countElemRef}>{counter}</span>
      </p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={resetCount}>Reset</button>
      <hr />
    </div>
  );
}

export default UseRefHook;
