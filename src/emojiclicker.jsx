
import { useState } from "react";
import {v4 as uuid} from "uuid";

export default function Emojiclicker() {
  const [emojis, setEmojis] = useState([{id:uuid(),emoji:"🐱"}]);

  const addemoji = () => {
    setEmojis([...emojis, {id:uuid(),emoji: "🐶"
    }]);
  };

  const removeemoji = (id) => {
    setEmojis(emojis.filter((e) => e.id !== id));
  }


  return (
    <div>
      {emojis.map((e, index) => (
        <span onClick={() =>  removeemoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
      ))}
      <button onClick={addemoji}>Add Emoji</button>
    </div>
  );
}

    
