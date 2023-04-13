import './App.css';
import RootReducer from './redux/RootReducer';
import {Provider} from "react-redux";
import store from './redux/store';
import StepCounter from "./components/StepCounter"
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <StepCounter/>
    </div>
    </Provider>
  );
}


export default App;
