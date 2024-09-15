import React from "react";
import Character from "./Character";
import "./galery.css";

function Gallery(props) {
  let characters = [
    {
      name: "SpongeBob",
      description:
        "A yellow sea sponge named SpongeBob SquarePants, who enjoys being a cook at Krusty Krab and lives in the Pacific Ocean.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/SpongeBob_SquarePants_character.svg",
    },
    {
      name: "Patrick",
      description:
        "An overweight coral-pink starfish, Patrick lives under a rock in the underwater city of Bikini Bottom, and is the best friend of SpongeBob SquarePants.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/800px-Patrick_Star.svg.png",
    },
    {
      name: "Mr.Krabs",
      description:
        "Krabs owns and operates the Krusty Krab, a prominent fast food restaurant located in the underwater city of Bikini Bottom. He resides in a hollow anchor with his daughter Pearl, who is a teenage sperm whale.",
      image_url:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Mr._Krabs.svg/220px-Mr._Krabs.svg.png",
    },
    {
        name:"Gary the Snail",
        description:"Gary the Snail is SpongeBob's pet snail who lives with him in their pineapple house. He meows and acts like a cat. He cannot talk but SpongeBob can understand him. ",
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmhDm-43M8xDv8Sfxa5D4iLi7XXFUS87-FIA&s",
    },
  ];
  return (
    <div id="container">
      <h1>SpongBob World</h1>
      <div id="gallery">
        {characters.map((character, index) => (
          <Character character={character} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
