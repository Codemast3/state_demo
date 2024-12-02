import { useState } from "react";

function generategameboard() {
    console.log("generating game board");
    return Array(5000)
}
export default function Dumbo() {
   
      const[gameboard, setGameboard] = useState(generategameboard());
      return (
        <button onClick={() => setGameboard("helo")}>Generate Gameboard</button>
      )
    
}
