import React from 'react'
import Board1 from './Board1'
import styled from 'styled-components'

const GameDiv = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-item:center;
    justify-content:center;
    width:300px
`

function Game1 (){
    // const [state,dispatch] = React.useReducer(reducer,defaultState)
    
    return(
        
        <GameDiv>
        <Board1 />
        </GameDiv>

    )
}

export default Game1