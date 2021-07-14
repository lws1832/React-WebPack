import React from 'react'
import { reducer,lee,sung } from './reducer'

const Woo =()=>{
    
    const [number,dispatch] = React.useReducer(reducer,0)

    const onUp = ()=>{
        dispatch({type:lee})
    }
    const onDwon = ()=>{
        dispatch({type:sung})
    }
    return(
        <div>
            <h1>{number}증감</h1>
            <button onClick={onUp}>+2</button>
            <button onClick={onDwon}>-2</button>
        </div>
    )

}

export default Woo