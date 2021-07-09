import React,{Component} from 'react'
import '../css/NavToggle.css'

class NavToggle extends Component{
    render(){
        return (
            <>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" onClick={this.props.toggle}/>
            {/* onclick 이벤트가 발생했을때 익명함수로 실행시키고 toggle()함수로 만들어서 실행을 안시킨다??받는 인자값이 없어서? */}
            <label htmlFor="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
            </label>
            </>
        )
    }
}

export default NavToggle