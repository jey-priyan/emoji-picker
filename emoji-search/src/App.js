import React, {useState} from "react";
import Picker from "emoji-picker-react"
import './App.css';

function App() {

  const [chosenEmoji, setChosenEmoji] = useState(null)
  
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    console.log(emojiObject.target)
  }

  return (
    <div className="emoji-container">
      <h3> Emoji Search App</h3>
      {chosenEmoji ? (
        <span>
          Your Emoji:
          <img
          style={{width: "15px"}}
          src={chosenEmoji.target.src}
          />
        </span>
      ) : (
        <span>No Emoji</span>
      )}

      <Picker onEmojiClick={onEmojiClick}/>
    </div>
  )
}

export default App;
