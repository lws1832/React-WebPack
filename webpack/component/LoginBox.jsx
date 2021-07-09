import React,{Component} from 'react'
import Login from './Login'
class LoginBox extends React.Component{
    render(){
        return(
            <>
            <Login v={this.props.v}/>
            </>
        )
    }
}
export default LoginBox