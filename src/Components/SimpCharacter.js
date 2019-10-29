import React from 'react';

function SimpCharacter({character}){
    return(
        <div>
            <img src={character.image}/>
            <h3>{character.character}</h3>
            <p>{character.quote}</p>
        </div>
    );
};

export default SimpCharacter;