import React, { useState } from 'react';
import Employess from '../../Interfaces/employees';

import {
  StyledTable,
  RemoveButton,
  RemoveIcon
} from './styles';

import ModalComponent  from "../modal/index";


interface Props {
  Employess: Employess[];
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


const TableBody: React.FC<Props> = (props) => { 

  
  const [employess, removeEmployee] = useState<Employess[]>(props.Employess);

  const [openModal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number>();

    const showModal = (id:number) => {
      setModal(true);
      setId(id);
    }

    const closeModal = (op:boolean, id?:number) => {
        (op) ? deleteEmployee(id) : setModal(false);
    }

    const deleteEmployee = (id?:number) => {
        setModal(false);
  
       var emp =  employess.filter((employee) =>{
          return employee.id !== id;
        })

       removeEmployee(emp);

    }

    const onClickModal = (id:number) =>{
      showModal(id);
    }

  return (
    <>
    <ModalComponent
    id={id}
    open={openModal}
    onClose={ (op:boolean, id?:number) => { closeModal(op, id)}}
    clean
    title="Tem certeza que deseja deletar esse funcionario? "
    >
    </ModalComponent>
    <tbody>
    { 
    employess.map((EmployessData, index) => 
      <tr key={index}>
          <td>{EmployessData.id}</td>
          <td>{EmployessData.nome}</td>
          <td>{EmployessData.cpf}</td>
          <td>{EmployessData.salario}</td>
          <td>{EmployessData.desconto}</td>
          <td>{EmployessData.dependentes}</td>
          <td><RemoveButton onClick={ () =>{
                onClickModal(EmployessData.id);
          }}><RemoveIcon className="fas fa-times"></RemoveIcon></RemoveButton></td>
      </tr>
      )
    }
  </tbody>
  </>
  )
}

const TableComponent: React.FC<Props> = (props) => {

  const [employess] = useState<Employess[]>(props.Employess);

    return(
      <StyledTable>
        <TableHead></TableHead>
        <TableBody Employess={ employess }></TableBody>
      </StyledTable>
    );
}


export default TableComponent;