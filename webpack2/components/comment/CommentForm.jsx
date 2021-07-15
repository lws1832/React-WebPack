import React,{useContext,useState} from 'react'
import Store from './Store/context'

const CommentForm = () => {
    const [input,setInput] = useState('')
    const {state,dispatch} = useContext(Store)
    // layout에서 바로 form으로 값을 전달한거에요 사실 한단계 item?

    const handleChange = e =>{
        const {value} = {...e.target}
        setInput(value)
    }

    const handleSubmit = e => {
       e.preventDefault()
       dispatch({type:'CREATE', payload:{userid:'idididi',content:input,date:'2021-210-10'} })
       setInput('')
    }

    return(
        <>
            <li className="comment-form">
            <form onSubmit={handleSubmit}>
                <span className="ps_box">
                    <input 
                    type="text"
                    className="int"
                    placeholder="댓글 써주시오"   
                    onChange={handleChange}
                    value={input}
                    />
                </span>
                <button
                    type="submit"
                    className="btn"
                >
                    등록
                </button>
                </form>
            </li>
        </>
    )
}

export default CommentForm