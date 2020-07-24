import { Iemployees } from '../Interfaces/employess';
import { EmployeesState } from '../Interfaces/employess';


const initialState: EmployeesState = {
  employees: []
} 


type Action = {type: string, payload: Iemployees}; 

const employeesReducer = (state = initialState, action: Action) => {  
    switch(action.type){
        case 'employees/create':
            return { ...state, employees: [...state.employees, action.payload] };
        default: 
            return state;
    }
}


export default employeesReducer;