import React, { useState } from 'react';
import EmployessData from '../../Interfaces/employees';

import {
  StyledTable,
  RemoveButton,
  RemoveIcon
} from './styles';


interface Props {
  EmployessData: EmployessData[];
}




const TableHead = () =>{
    return(
      <thead>
          <tr>
              <th>#</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>S. Bruto</th>
              <th>V. Desconto INSS</th>
              <th>N. Dependentes</th>
              <th><i className="fas fa-user-times"></i></th>
          </tr>
      </thead>
    )
}

const TableBody: React.FC<Props> = ({EmployessData}) =>{

  const [ employee, removeEmployee ] = useState(EmployessData); 

  return (
    <tbody>
    { 
    EmployessData.map((EmployessData, index) => 
      <tr key={index}>
          <td>{EmployessData.id}</td>
          <td>{EmployessData.nome}</td>
          <td>{EmployessData.cpf}</td>
          <td>{EmployessData.salario}</td>
          <td>{EmployessData.desconto}</td>
          <td>{EmployessData.dependentes}</td>
          <td><RemoveButton><RemoveIcon className="fas fa-times"></RemoveIcon></RemoveButton></td>
      </tr>
                      )
      }
</tbody>
  )
}

const TableComponent: React.FC<Props> = ({EmployessData}) => {

    return(
      <StyledTable>
        <TableHead></TableHead>
        <TableBody EmployessData={ EmployessData } ></TableBody>
      </StyledTable>
    );
}


export default TableComponent;