import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results));
    }, []);


    return(
        <div className='characters-container'>
            {
            characters.map(character =>(
                <div className='Rick-Card-Container'>
                    <img src={character.image} />
                    <h2>{character.name}</h2>
                </div>
            ))
            }
        </div>
    );
}

export default Characters;