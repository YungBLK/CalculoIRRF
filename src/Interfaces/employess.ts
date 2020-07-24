export interface Iemployees {
      nome: string,
      cpf: string,
      salario: number,
      desconto: number,
      dependentes: number,
      IRPF: number
}


export interface EmployeesState {
    employees: Iemployees[]
}