import React  from 'react'
import styled from 'styled-components'


const ButtonStyle = {
    "background":"black",
    "color":"#fff"
}
// const Button = styled.button`
// background:#000;
// border:none;
// color:#fff;
// padding:7px;
// `
// const ButtonHover = styled(Button)`
//     backfround:#007bff;
//     :hover{
//         background:#0069d9;
//     }
// `

const Wow =()=>{
    const opOtp=React.useRef()
    const handleClick=()=>{
        opOtp.current.focus()
        opOtp.current.style.height = '100px'
    }
    return(
        <>
        <input type="text" ref={opOtp}/>
        <button
        style={ButtonStyle}
        onClick={handleClick}
        >
            클릭
        </button>
       
        </>
    )
}

export default Wow