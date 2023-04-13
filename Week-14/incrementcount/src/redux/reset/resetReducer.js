import {RESET} from "./resetAction"
import { initialValue } from "../initialValue";
export function resetReducer(state=initialValue,action){
    switch(action.type){
        case RESET: {
            return {
                ...state,count : initialValue.count
            }
        }
        default : return state;
    }
}