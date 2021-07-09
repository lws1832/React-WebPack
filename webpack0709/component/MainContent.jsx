import React,{Component} from 'react'
import '../css/Community.css'

class MainContent extends Component {
    render() {
        return (
            <div className="main">
                <h1>상담게시판</h1>
                <p>개인정보취급방침</p>
                <ul>
                    <li>
                    <textarea name="msg" className="sc">
                        가.개인정보 수집방법
                        나.개인정보 이용목적
                        다.수집한 개인정보 보유및 이용기간
                        </textarea>
                    </li>
                </ul>
                <p>상담정보</p>
                <ul>
                    <li><span>이름*</span><input type="text" /></li>
                    <li><span>성별*</span>
                        <input type="radio" name="gender" value="man" />남
                        <input type="radio" name="gender" value="woman" />여
                    </li>
                    <li><span>나이*</span><input type="text" />세</li>
                    <li><span>이메일*</span><input type="email" />@<input type="email" /></li>
                    <li><span>전화번호*</span>
                        <input type="tel" />-
                        <input type="tel" />-
                        <input type="tel" />
                    </li>
                    <li><span>상담내용</span>
                        <textarea name="msg"></textarea>
                    </li>
                </ul>

            </div>
        )
    }
}

export default MainContent