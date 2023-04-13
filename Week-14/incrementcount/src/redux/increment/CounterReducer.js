import {INC} from "./counterAction"
import { initialValue } from "../initialValue";
export const CounterReducer = (state=initialValue,action) =>{
  switch(action.type)
  {
    case INC :
      return{
        ...state,count : state.count+1
      }
      default: return state;
  }
}