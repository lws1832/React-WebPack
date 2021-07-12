import React,{useState,useMemo,useCallback} from 'react'

const Memo=()=>{
    // 상태값
    const [username,setUsername] = useState('')
    const [list,setList] = useState([])
    const change = e =>{
        let {value} ={...e.target}
        setUsername(value)
    }
    // const submit =e =>{
    //     e.preventDefault()
    //     console.log('submit')
    //     //불변성
    //     // 얕은복사 하는게 목적
    //     const newList = [...list]
    //     // const newList = list.slice()
    //     newList.push(username)
    //     setList(newList)
    //     setUsername('')
    // }
    const submit = useCallback(()=>{
        e.preventDefault()
        const newList = [...list]
        newList.push(username)
        setList(newList)
        setUsername('')
    },[list,username])
    // const renderList =()=>{
    //     // let newArr=[]
    //     // for(let i=0; i<list.length; i++){
    //     //     newArr.push(<li key={i}>{list[i]}</li>)
    //     // }
    //     let newArr = list.map((v,k)=>{
    //         return <li key={k}>{v}</li>
    //     })
    //     return newArr
        
    //     // return(
    //     //     list.map((v,k)=>{
    //     //         return <li key={k}>{v}</li>
    //     //     })
    //     // )
    // }
    const renderList =useCallback(()=>{
        let newArr = list.map((v,k)=>{
            return <li key={k}>{v}</li>
        })
        return newArr
    },[list])
    // const count =() =>{
    //     return list.length
    // }

    const userCount = useMemo(()=>{ //useMemo 두개 인자값 함수,배열
        // 한번 구했던값은 그대로 담고있고 
        console.log('asdsd')
            return list.length
    },[list.length])
// useMemo는 메모이제이션?변수일때 사용한다
    return(
        <>
        <h2>회원리스트({userCount})</h2>
        <form onSubmit={submit}>
            <input 
            type="text" 
            name="username" 
            value={username} 
            onChange={change}
            />
            <button type="submit">
                추가
            </button>
            </form>     
            <ol>
                {
                   renderList()
                }
            </ol>
        </>

    )
}

export default Memo