import { useState } from "react";
function Player(props) {
  const [isEditing, setEditing] = useState(false);
  const [name, setName] = useState(props.firstName);

  const handleChange = (event) => {
    console.log(event);
    setName(event.target.value);
  };
  const handleclick = () => {
    // if (!isEditing) {
    //   setEditing(true);
    // } else {

    //   setEditing(false);
    // }
    setEditing((editing) => !editing);
  };
  return (
    <>
      <li className={props.isActive ? "active" : undefined}>
        <span className="player">
          {isEditing ? (
            <input type="text" required value={name} onChange={handleChange} />
          ) : (
            <span className="player-name">{name}</span>
          )}

          <span className="player-symbol">{props.symbol}</span>
        </span>

        <button onClick={handleclick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
export default Player;
