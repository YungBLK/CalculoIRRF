import employeeReducer  from "./employees";
import { combineReducers } from 'redux';



const rootReducers = combineReducers({
    employeeReducer,
})  



export default rootReducers;