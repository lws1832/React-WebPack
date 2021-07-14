import React from 'react'


const Memo = ()=>{
    const [username, setUsername] = React.useState('')
    const [list,setList] = React.useState([])
    const inputRef = React.useRef()

    const change = (e)=>{
        let {value} = {...e.target}
        setUsername(value)
        console.log(value);
    }

    const submit = (e)=>{
        e.preventDefault()
        let newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
        inputRef.current.focus()
        inputRef.current.style.height="100px"
    }

    const renderList = () =>{
        let newArr = list.map((v,k)=>{
            return <li key={k}>{v}</li>
        })
        return newArr
    }
    return (
        <>
            <form onSubmit={submit}>
                <input 
                type="text" 
                value={username} 
                onChange={change} 
                ref={inputRef}
                />
                <button type="submit">
                    버튼
                </button>
                </form>
                <ul>
               { renderList()}
                </ul>
        </>
    )
}
export default Memo