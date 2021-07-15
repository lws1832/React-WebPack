import React,{useContext} from 'react'
import CommentItem from './CommentItem'
import Store from './Store/context'


const CommentList = ()=>{
    // const list = [
    //     {userid:"asd",content:"ㅁㄴㅇㅁㄴㅇ1",date:"5464243"},
    //     {userid:"asd",content:"ㅁㄴㅇㅁㄴㅇ2",date:"5464243"},
    //     {userid:"asd",content:"ㅁㄴㅇㅁㄴㅇ3",date:"5464243"},
    //     {userid:"asd",content:"ㅁㄴㅇㅁㄴㅇ4",date:"5464243"},
    //     {userid:"asd",content:"ㅁㄴㅇㅁㄴㅇ5",date:"5464243"},
    //     {userid:"asd",content:"ㅁㄴㅇㅁㄴㅇ6",date:"5464243"},
    // ]
    const {state} = useContext(Store)
    const list = state.commentItem
    const {loading,commentItem,error} = state
    const Item = list.map((v,k)=>{
        return( 
            <CommentItem 
                key={k}
                userid={v.userid}
                content={v.content}
                date={v.date}
                index={k}
            />
        )
    })
    if(loading) return <li>나 로딩중..</li>;
    if(error) return <li>에러남</li>;
    return(
        <li>
            {Item}
            {/* <CommentItem 
                userid="qwe13123"
                content="hihihhi"
                date="2021-07-14"
            />
               <CommentItem 
                userid="qwe13123"
                content="hihihhi"
                date="2021-07-14"
            />
              <CommentItem 
                userid="qwe13123"
                content="hihihhi"
                date="2021-07-14"
            />
               <CommentItem 
                userid="qwe13123"
                content="hihihhi"
                date="2021-07-14"
            />
               <CommentItem 
                userid="qwe13123"
                content="hihihhi"
                date="2021-07-14"
            /> */}
        </li>
    )
}

export default CommentList