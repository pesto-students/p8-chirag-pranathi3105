import { connect } from "react-redux"
import { increment,reset} from "../redux/increment/counterAction";
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
        count: state.counterReducer.count
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    return {
        inc: ()=>{dispatch(increment())},
        res: ()=>{dispatch(reset())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StepCounter);