import React,{useContext,useReducer,useEffect} from 'react'

import Store from './Store/context'
import reducer from './Store/reducer'
import {getComment} from './api/api'


const CommentLayout = ({children})=>{

    const globalStore = useContext(Store)
    console.log('context value : ',globalStore)

    const [state,dispatch] =useReducer(reducer,globalStore)
    console.log('state value : ', state)

    useEffect( ()=>{
        getComment(dispatch)
        // console.log('최소 실행 render')
    },[]) //빈 배열일경우 최초 한번만 실행된다??

    return(
        <Store.Provider value={{state,dispatch}}> 
        {/* state 상태값과 dispatch 변수값을 넣어준다 이때부터 하위컴포넌트에 자유롭게 전달가능? */}
            <ul className="comment">
                {children}
            </ul>
        </Store.Provider>
    )
}

export default CommentLayout