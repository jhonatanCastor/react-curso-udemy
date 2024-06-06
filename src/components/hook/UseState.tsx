import { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const handlerClick = () => {
    setCount(count +1);
  }

  return (
    <>
      <div>
        <h3>{count}</h3>
       <button onClick={handlerClick}>Submit</button>
      </div>
    </>
  )
}

export default UseStateHook;

// Usado para adicionar estado a componentes funcionais