import React from 'react'
import {reducer,UP,DOWN} from './reducer'
// const Counter = ()=>{

//     const [number,setNumber]= React.useState(0)
//     const onUp =()=>{
//         setNumber((prevNumber)=>prevNumber+1)
//     }
//     const onDown =()=>{
//         setNumber((prevNumber)=>prevNumber-1)
//     }
//     return(
//         <>
//         <div>
//             <h2>{number}</h2>
//             <button onClick={onUp}>+1</button>
//             <button onClick={onDown}>-1</button>
//         </div>
//         </>
//     )
// }
// const reducer=(number,action)=>{

//     switch(action.type){
//         case"UP":
//             return number+1
//         case"DOWN":
//             return number-1
//         default:
//             return number;
//     }
// // action 
// }
const Counter =()=>{

    const [number,dispatch] = React.useReducer(reducer,0)
    // 변수 선언영역 = 다음으로 변수를 넣어준영역
    //(reducer,0) 하나는 값을 저장할 변수명 하나는 값을 변경할 함수명
    // (0) 초기값을 뜻한다. number
    // dispatch가 실행될때 실행되는 함수 reducer 상태값 객체값
    
    const onUp=()=>{
        dispatch({type:UP})
    }
    const onDown=()=>{
        dispatch({type:DOWN})
    }

    return (
        <div>
            <h2>{number} reducer</h2>
            <button onClick={onUp}>+1</button>
            <button onClick={onDown}>-1</button>
        </div>
    )
}

export default Counter