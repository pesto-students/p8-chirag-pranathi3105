import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./increment/CounterReducer";
export default configureStore({
    reducer: {
        counterReducer
    }
})

