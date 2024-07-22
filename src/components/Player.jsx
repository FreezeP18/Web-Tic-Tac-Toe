import { useState } from "react";

export default function Player(props) {
  const [playerName, setplayerName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      props.onChangeName(props.symbol, playerName);
    }
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  let btnCaption = "Edit";

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    btnCaption = "Save";
  }

  return (
    <>
      <li className={props.isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{props.symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
      </li>
    </>
  );
}
