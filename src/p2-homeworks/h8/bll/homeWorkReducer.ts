import {UserType} from "../HW8";

type ActionType = {
    type: 'sort' | 'check'
    payload : 'up' | 'down' | number
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType>  => {

    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up'){
                return [...state.sort((a,b)=> a.name > b.name ? 1: -1)]
            }
            if (action.payload === 'down'){
                return  [...state.sort((a,b)=> a.name < b.name ? 1: -1)]
            }
            return state
        }
        case 'check': {
            return state.filter(u=> u.age>= action.payload)
        }
        default: return state
    }
}