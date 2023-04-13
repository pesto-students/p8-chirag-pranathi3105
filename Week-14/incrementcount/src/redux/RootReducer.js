import { combineReducers } from "redux";
import { CounterReducer } from "./increment/CounterReducer";
import { resetReducer } from "./reset/resetReducer";

 const RootReducer = combineReducers(
    {
        inc : CounterReducer,
        res : resetReducer
    }
)

export default RootReducer;