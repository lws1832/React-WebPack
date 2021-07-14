import React from 'react'
import styled from 'styled-components'

const ButtonStyle = {
    "background":"black",
    "border":"none",
    "color":"#fff",
    "padding":"4px 14px"
}
const Button = styled.button`
    background:#000;
    border:none;
    color:#fff;
    padding:7px;
    `
const ButtonHover = styled(Button)`
        background:#007bff;
        :hover{
            background:#0069d9;
        }
    `
const Index = ()=>{
    const inputRef = React.useRef() //ref 
    const handleClcik =()=>{
       inputRef.current.focus()
       inputRef.current.style.height = '100px'
       if(inputRef.current.style.display ==''){
       inputRef.current.style.display ='none'
    }else{
        inputRef.current.style.display =''
    }
    }
    return(
        <>
        <div>
            <input type="text" ref={inputRef}/>
            <button 
            style={ButtonStyle}
            onClick={handleClcik}
            >
                hi
            </button>
            <Button onClick={()=>{handleClcik()}}>
                asd
            </Button>
            <ButtonHover onClick={()=>{handleClcik()}}>
                qweqeqe
            </ButtonHover>
        </div>
        </>
    )
}

export default Index