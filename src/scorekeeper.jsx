import {useState} from "react";
export default function Scorekeeper() {
    const [scores,setScores]=useState({player1:0,player2:0});
   
   function handlePlayer1Score() {
    const newscore = {...scores,player1: scores.player1 + 1, player2: scores.player2}
    setScores(newscore)
   }
    return (
        <div>

            <h1>Scorekeeper</h1>
            <p>
                player 1: {scores.player1}
            </p>
            <p>
                player 2: {scores.player2}
            </p>
            <button onClick={handlePlayer1Score}>Player 1 Score</button>
            <button onClick={handlePlayer1Score}>Player 2 Score</button>
        </div>
    )
}
