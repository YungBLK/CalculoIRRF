import  { Iemployees }  from "../Interfaces/employess";

export const listEmp = () => {
    return {
        type: 'employess/list'
    }
}

export const createEmp = (employeeObj:Iemployees) => {
    return {
        type: 'employess/create',
        payload: employeeObj
    }
}



