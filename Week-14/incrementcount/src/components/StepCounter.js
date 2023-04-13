import { connect } from "react-redux"
import { increment} from "../redux/increment/counterAction";
import { reset} from "../redux/reset/resetAction";
function StepCounter(props){
    return(
        <div>
             <h1>Step Counter</h1>
        <h3>{props.count}</h3>
        <div className="btndiv">
         <button onClick={props.inc}>Add Steps</button>
        <button onClick={props.res}>Reset Steps</button>
        </div>
       
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    return {
        count: state.RootReducer.inc.count
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        inc: ()=>{dispatch(increment())},
        res: ()=>{dispatch(reset())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StepCounter);