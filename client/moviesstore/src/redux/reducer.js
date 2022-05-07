import { ADDCOMPLETED } from "./actionTypes"

const nameInitialState = {
    completedGames:[]
}
export const reducer = (state = nameInitialState, {type,payload}) => {
    switch (type) {
        case ADDCOMPLETED:
            return {
                ...state,
                completedGames : [...state.completedGames,payload]
            }
        default:
            return state
    }
}