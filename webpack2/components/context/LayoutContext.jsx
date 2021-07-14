import React from 'react'

export const LayoutContext = React.createContext() //하나의 컴포넌트를 생성했다라고 생각

const LayoutStore=(props)=>{
    const user ={
        userid:'lee2323',
        username:'wow',
        job:'db'
    }
    return(
        <LayoutContext.Provider value={user}> 
            {props.children}
        </LayoutContext.Provider>

    )
}

export default LayoutStore