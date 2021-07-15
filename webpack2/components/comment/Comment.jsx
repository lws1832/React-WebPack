import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import CommentLayout from './CommentLayout'

const Comment = ()=>{
    return(
        <CommentLayout>
            <CommentForm />
            <CommentList />
        </CommentLayout>
    )
}

export default Comment