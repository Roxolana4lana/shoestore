import { ADD_ITEM, DELETE_ITEM, FETCH_ITEM } from '../actions/types'


export default function itemReducer(state=[], action){
    switch(action.type){
        case ADD_ITEM:
        return[...state, action.payload];
        case DELETE_ITEM:
        return state.filter(item=>item.id !== action.payload.id)
        case FETCH_ITEM:
        return action.items
        default:
        return state
    }
}