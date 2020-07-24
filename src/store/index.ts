import { createStore } from 'redux';
import employeesReducer from '../reducers/employees';
import { devToolsEnhancer } from 'redux-devtools-extension';

// STORE - >  GLOBALIZED STATE
const myStore = createStore(employeesReducer,
    devToolsEnhancer({}));


// ACTION INCREMENT


// DISPATCH

export default myStore;