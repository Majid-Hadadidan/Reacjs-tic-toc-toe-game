import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  //click and edit to save
  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  //input your name for game
  const handleChange = (event) => {
    setPlayerName(event.target.value);
  };

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  
  if (isEditing) {
    editablePlayerName = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
