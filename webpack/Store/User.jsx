import React,{Component} from 'react'

const User= {
    userid:'ee22',
    name:'woo'
}

const UserContext = React.createContext(User)
//  저장공간 만들기
// 저장 위치선정?? jsx
// 저장한값 가져오기
// context 라고 치면 리액트 사이트에 정보 나옴

export default UserContext
