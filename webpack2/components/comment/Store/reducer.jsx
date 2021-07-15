
// 인자값 2개 상태값 액션값
// reducer는 결국 상태를 바꿔야 하기때문에
// 이전상태값을 가져와야한다.
// dispatch 바꿀정보를 받아야함 -> action
// 결국엔 리턴을 해주는데 무엇을 리턴하냐 state값
const reducer = (state,action) => {
    switch(action.type){
        case "GET_COMMENT": //최초 실행하였을때
        console.log('GETCOMMENT')
            return{
                ...state,
                loading:true,
                /*객체형태에서 그안에 코멘트아이템이 있고 그안에 배열이 있고 배열안에 객체로 넣어서 보내야한다.*/ 
               
            }
        case "GET_COMMENT_SUCCESS": //데이터를 완전히 받아왓을때
        console.log('GETCOMMENT 성공')
            return {
                ...state,
                loading:false,
                commentItem:action.payload,
            }
        case "GET_COMMET_ERROR": //데이터를 읽어오지 못했을때
        console.log('GETCOMMENT 실패')    
        return {
                ...state,
                loading:false,
                error:action.payload
            }
        case "CREATE":
            return {
                ...state,
                commentItem:action.payload
            }
        case "UPDATE":
            // console.log('수정버튼 : ',action)
            // // let content = action.payload.content;
            // // let index = action.payload.index; //이거 두줄이랑 아래 한줄이랑 같은뜻
            // // let {payload:{content,index}}=action
            // let {content,index} = {...action.payload}
            // let {commentItem}={...state}
            // commentItem[index].content = content
            // return {
            //     ...state,
            //     commentItem:[...commentItem]
            // }

            let content = action.payload.content;
            let index=action.payload.index;
            let commentItem = state.commentItem //복사해서 가져온다 point
            console.log('1번 ',commentItem) //객체전체를 불러온다
            console.log('2번 ',commentItem[index]) //index값이 무엇을 의미하는지 객체안에 특정객체를 불러온다
            console.log('3번 ',commentItem[index].content)//여기서쓰는  content가 무엇인지 엔터치기전 내용
            console.log('4번 ',content) //여기서 쓰는 content 엔터 쳣을때 변경되는 내용
            commentItem[index].content = content

            return {
                ...state,
                commentItem:[...commentItem]
            }
        case "DELETE":
            console.log('적용??:: ', action.payload)
            console.log(state.commentItem)
            let newArr=[]
            // for(let i=0; i<state.commentItem.length; i++){ //아래 필터를 사용해서 한줄로 표현 가능하다.
            //     if(i !== action.payload) newArr.push(state.commentItem[i])
            // }
            // console.log(newArr,state.commentItem)
            // newArr = 내가 원하는값을 삭제하고 남은 배열값
            // state.commentItem =  내가 기존에 가지고 있었던 배열값

            return {
                ...state, //render 발생 시키고싶을때
                commentItem:[...state.commentItem.filter( (v,k)=> action.payload !==k) ] //위에 for 함축시켜서 만든거
            }
        default:
            return state
    }
}

export default reducer 