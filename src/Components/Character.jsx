import React from "react";
import { useState } from "react";
import "./character.css";
function Character({ character }) {
  let [displayFlag, setDisplay] = useState(true);
  let [editFlag, setEdit] = useState(false);
  let [name, setName] = useState(character.name);
  let [description, setDescription] = useState(character.description);
  let [image_url, setUrl] = useState(character.image_url);
  let [deleted, setDeleted] = useState(false);

  let handleClick = () => {
    setDisplay(!displayFlag);
  };
  let handleEdit = () => {
    setEdit(!editFlag);
  };
  let handleSave = () => {
    character.name = name;
    character.description = description;
    setDisplay(!displayFlag);
    setEdit(!editFlag);
  };
  let handleDelete = () => {
    setDeleted(true);
  };
  return (
    <>
      {" "}
      {deleted ? (
        ""
      ) : (
        <div className="character">
          {displayFlag ? (
            <div className="img-container" onClick={() => handleClick()}>
              <img src={image_url} alt="" />
            </div>
          ) : editFlag ? (
            <div className="info">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
                            <input
                type="text"
                placeholder="enter image url"
                onChange={(e) => setUrl(e.target.value)}
              />
              <input
                className="btn"
                type="button"
                value="save"
                onClick={() => handleSave()}
              />
            </div>
          ) : (
            <div className="info">
              <p className="name">{character.name}</p>
              <p>{character.description}</p>
              <div className="buttons">
                <input
                  className="btn"
                  type="button"
                  value="delete"
                  onClick={() => handleDelete()}
                />
                <input
                  className="btn"
                  type="button"
                  value="edit"
                  onClick={() => handleEdit()}
                />
              </div>
              <p className="back" onClick={() => handleClick()}>
                Back
              </p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Character;
