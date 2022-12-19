import { useState, useRef } from "react";


export default function App() {
const inputRef = useRef(null);
const [input, setInput] = useState("");

  return (
     <div className="left">
       <input ref={inputRef} type="text" placeholder="eg. 192.168.1.1/32" />
       <button onClick={() => setInput(inputRef.current.value)}>Submit</button>
       <p>{input}</p>
     </div>
   );
}