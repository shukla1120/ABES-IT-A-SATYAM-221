import { useState } from "react";

function Usestate(){
const [count,setCount]=useState(0);
  function change(){
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={change}>Click</button>
      <span>{count}</span>
      <button>-</button>
    </div>
  );
}
export default Usestate;