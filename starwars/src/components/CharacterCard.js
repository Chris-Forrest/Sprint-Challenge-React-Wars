import React from 'react'
import Character from './Character'
import styled from 'styled-components'


const CharacterCard = ({characters}) => {
    
    return(

        <div className='characters-container'>
            {characters.map(singleCharacter => {
                return <Character key={''} character={singleCharacter}/>
            })}
        </div>

    )
}

export  default CharacterCard

