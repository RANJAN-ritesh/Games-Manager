import { ADDCOMPLETED } from "./actionTypes"

export const addCompleted = (payload)=>{
    return{
        type:ADDCOMPLETED,
        payload
    }
}