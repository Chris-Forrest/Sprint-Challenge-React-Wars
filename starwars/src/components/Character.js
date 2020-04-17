// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const Character = ({ character }) => {
    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgb(210, 210, 210);
    border-radius: 5px;
    box-shadow: 10px 8px 12px -2px rgb(128, 127, 197);
    margin: 8px;
    padding: 12px;
    background-color: white;
    width: 50%;
    `
    const CharacterCardTitle = styled.h2`
    width: 100%;
    word-break: break-word;
    `

    return (
        <Container>
          <CharacterCardTitle>{character.name}</CharacterCardTitle>
          <p>Gender: {character.gender}</p>
          <p>Birth Year: {character.birth_year}</p>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
        </Container>
      );
    };
    
    export default Character