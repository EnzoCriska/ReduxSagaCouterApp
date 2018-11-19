import { connect } from "react-redux";
import counterComponents from "../components/counterComponents";

import {increaseAction} from '../actions/actionsIndex';
import {decreaseAction} from '../actions/actionsIndex';

const mapStateToProps = (state) => {
    return{
        times: state.counterReducer ? state.counterReducer : 0
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onDecrement: (step) =>{
            dispatch(decreaseAction(step));
        },
        onIncrement: (step) =>{
            dispatch(increaseAction(step)); 
        }
    }
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(counterComponents);
export default CounterContainer;