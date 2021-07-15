import {createContext} from 'react'


const initalState={
    loading:false,
    commentItem:[],
    error:null,
}
const Store = createContext(initalState) //

export default Store