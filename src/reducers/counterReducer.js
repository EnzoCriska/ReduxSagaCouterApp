import {DECREMENT, INCREMENT} from '../actions/actionTypes'

const CounterReducer = (time =0, action) => {
    switch(action.type){
        case DECREMENT:
            return time = time - action.step;
        case INCREMENT:
            return time = time + action.step;
        default: return time;
    }
}

export default CounterReducer;