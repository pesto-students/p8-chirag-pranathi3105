import {INC,RESET} from "./counterAction"
const initialValue = {
  count : 0
}
const CounterReducer = (state=initialValue,action) =>{
  switch(action.type)
  {
    case INC :
      return{
        ...state,count : state.count+1
      }
    case RESET:
      return{
        ...state,count : 0
      }
      default: return state;
  }
}

export default CounterReducer;