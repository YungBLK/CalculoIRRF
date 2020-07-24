import React, { ChangeEvent } from 'react';
import { Iemployees } from "../../Interfaces/employess";
import { useSelector, useDispatch } from 'react-redux';
import { EmployeesState } from '../../Interfaces/employess';
import { createEmp } from '../../actions/employeesActions';
import { StyledForm } from './styles';

interface IProps {
 
}


const _Form: React.FC<IProps> = () => {

  const selectorEmployees = (state: EmployeesState) => state.employees;
  const employeess = useSelector(selectorEmployees);
  const dispatch = useDispatch();

  const createEmployee = (newEmployee: Iemployees) => {
    
    // Salário Base IRRF = (Salário bruto - Desconto do INSS) - (Valor da dedução por dependentes*
    //   X Quantidade de dependentes).
      let dependentesValue = 164.56;


      let dependentesCost =  dependentesValue * newEmployee.dependentes;
      let salarioBaseIRRF = ( newEmployee.salario - newEmployee.desconto ) - (dependentesCost);

       // (V)

      //  Até R$ 1.903,98 Isento R$ 0,00
      //  De R$ 1.903,99 até R$ 2.826,65 7,5% R$ 142,80
      //  De R$ 2.826,66 até R$ 3.751,05 15% R$ 354,80
      //  De R$ 3.751,06 até R$ 4.664,68 22,5% R$ 636,13
      //  Acima de R$ 4.664,68 27,5% R$869,36

      // Desconto IRRF = (Salário Base IR x Alíquota) - Parcela a Deduzir do IRPF.
      
      let descontoIRRF = 0;

      if(salarioBaseIRRF <= 1903.98){
          descontoIRRF = (salarioBaseIRRF * 0);
      }else if (salarioBaseIRRF >= 1903.99 && salarioBaseIRRF <= 2826.65){
        descontoIRRF =   (salarioBaseIRRF * (7.5/100)) - 142.80;
      }else if(salarioBaseIRRF >= 2826.66 && salarioBaseIRRF <= 3751.05){
        descontoIRRF =   (salarioBaseIRRF * (15/100)) - 354.80;
      }else if(salarioBaseIRRF >= 3751.06 && salarioBaseIRRF <= 4664.68) {
        descontoIRRF =   (salarioBaseIRRF * (22.5/100)) - 636.13;
      }else{
        descontoIRRF = (salarioBaseIRRF * (27.5/100)) - 869.36;
      }
      
     dispatch({type: 'employees/create', payload: newEmployee});
  } 
  
  const [nome, setNome] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [salario, setSalario] = React.useState<number>(0);
  const [desconto, setDesconto] = React.useState<number>(0);
  const [dependentes, setDependentes] = React.useState<number>(0);


    return(
      <>
       <ul>
         {employeess.map((employee, index) => {
            return <li key={index}>{employee.nome} || IRPF: {employee.IRPF}</li>
         })}
       </ul>
        <StyledForm>
        <div>
        <label>
          Nome do Funcionário
          <input value={nome} name="name" onChange={e => setNome(e.target.value)} placeholder='Nome completo'  type="text" required></input>
        </label>
        </div>
        <div>
        <label>
          CPF do Funcionário
          <input value={cpf} name="cpf" onChange={e => setCpf(e.target.value)} type="text" placeholder="XXX.XXX.XXX-XX"></input>
        </label>
        </div>
        <div>
        <label>
          Salário do Funcionário
          <input value={salario} name="salario" onChange={e => setSalario(e.target.valueAsNumber)} type="number" required></input>
        </label>
        </div>
        <div>
        <label>
          Valor do desconto INSS
          <input value={desconto} name="desconto" onChange={e => setDesconto(e.target.valueAsNumber)} type="number" required></input>
        </label>
        </div>
        <div>
        <label>
          Número de dependentes
          <input value={dependentes} name="dependentes" onChange={e => setDependentes(e.target.valueAsNumber)} type="number" required></input>
        </label>
        </div>
        <button type="button" onClick={ (e) => createEmployee({
          nome: nome,
          cpf: cpf,
          salario: salario,
          desconto: desconto,
          dependentes: dependentes,
          IRPF: 0
        })}>Cadastrar</button>
      </StyledForm>
      </>
    )
}


export default _Form;