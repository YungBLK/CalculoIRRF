import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createEmp, listEmp } from '../../actions/employeesActions'
import { Iemployees, EmployeesState } from '../../Interfaces/employess';


import {
  StyledTable 
} from './style'



interface Iprops {

}

const Table: React.FC<Iprops> = (Iprops) => {


    const selectorEmployees = (state: EmployeesState) => state.employees;
    const employeess = useSelector(selectorEmployees);
   
    return(
    <>
     <StyledTable>
       <thead>
         <tr>
           <th>Nome</th>
           <th>CPF</th>
           <th>Salário</th>
           <th>Desconto</th>
           <th>Dependentes</th>
           <th>Desconto IRPF</th>
         </tr>
       </thead>
       <tbody>
        {
        employeess.map( (employee, index) =>{
        return <tr key={index}>
          <td>{employee.nome}</td>
          <td>{employee.cpf}</td>
          <td>{employee.salario}</td>
          <td>{employee.desconto}</td>
          <td>{employee.dependentes}</td>
          <td>{employee.IRPF}</td>
          </tr>
        })
       }
       </tbody>
     </StyledTable>
    </>
    );
}


export default Table ;