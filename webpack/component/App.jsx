import React,{Component}  from "react"
import UserContext from "../Store/User"
import LoginBox from "./LoginBox"


class App extends Component{
    state={
        loginTxt:'login',
        user:{
            userid:"dd11",
            name:'asd',
            job:'qweqe'
        }
        
    }
    

    render(){
        return(
            <>
            <UserContext.Provider value={this.state.user}>
                <LoginBox v={this.state.loginTxt}/>
            </UserContext.Provider>
            </>
        )
    }
}

//다른파일에서 쓸 수 있도록 따로 빼놓은상태
export default App 