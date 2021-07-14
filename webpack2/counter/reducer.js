// export const UP='UP'
// export const DWON='DWON'

// export const reducer=(state,action)=>{

//     switch(action.type){
//         case UP:
//             return state+3
            
//         case DWON:
//             return state-5
//         default:
//             return state;
//     }
// // action 
// }

export const lee = 'lee'
export const sung = 'sung'

export const reducer=(state,action)=>{
    switch(action.type){
        case lee:
            return state +10
        case sung:
            return state -20
        default:
            return state;
    }
}

