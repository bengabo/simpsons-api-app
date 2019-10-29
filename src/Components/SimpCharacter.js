import React from 'react';

function SimpCharacter({character}){
  return(
    <div className="container">
      <div className="characterSheet">
        <img src={character.image}/>  
        <h3>{character.character}</h3>
      </div>
      <p>{character.quote}</p>
    </div>
  );
};

export default SimpCharacter;