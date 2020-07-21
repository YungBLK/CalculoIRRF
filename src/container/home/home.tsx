import React from "react";
import {
  Container,
  ContentDiv,
  ContentP,
  ButtonWrapper,
  ButtonAdd,
  AddIcon,
  Title,
} from "./style";

import TableComponent from "../../components/table/index";
import "../../assets/css/base.css";
import Employess from "../../Interfaces/employees";


const Home = () => {
    const dataEmployess: Employess[] = [
      {
        id: 1,
        nome: "Letícia Aurora Farias",
        cpf: "936.938.039-60",
        salario: 998,
        desconto: 74.85,
        dependentes: 2,
      },
      {
        id: 2,
        nome: "Edson Thiago Drumond",
        cpf: "748.517.476-24",
        salario: 1045,
        desconto: 78.38,
        dependentes: 1,
      },
      {
        id: 3,
        nome: "Igor Lúcio Viera",
        cpf: "142.326.196-82",
        salario: 1045,
        desconto: 78.38,
        dependentes: 1,
      },
      {
        id: 4,
        nome: "Fátima Elza Tereza Castro",
        cpf: "701.118.872-08",
        salario: 5500,
        desconto: 628.95,
        dependentes: 0,
      },
      {
        id: 5,
        nome: "Sandra Giovanna Drumond",
        cpf: "715.890.756-25",
        salario: 4522,
        desconto: 492.03,
        dependentes: 3,
      },
      {
        id: 6,
        nome: "Valentina Clara Nunes",
        cpf: "101.151.404-41",
        salario: 10000,
        desconto: 713.1,
        dependentes: 4,
      },
    ];

  return (
    <Container>
      <ContentDiv>
        <Title>Calculo do IRRF</Title>
        <ContentDiv>
          <ContentP>
            IRRF é a sigla utilizada para designar o Imposto de Renda Retido na
            Fonte que é, essencialmente, o montante retido de um empregado que
            precisa fazer o pagamento do imposto. A empresa tem responsabilidade
            solidária sobre esses recolhimentos e, por isso, faz a retenção do
            valor devido no mês ou, pelo menos, de parte dele.
          </ContentP>
          <ContentP>
            A base para o cálculo do IRRF é o salário bruto menos o desconto da
            contribuição previdenciária. O valor do IRRF na folha de pagamento
            dependerá do salário mensal do colaborador. Assim, quanto maior o
            salário, mais elevado será o valor retido.
          </ContentP>
          <ContentP>
            No caso de um empregado que tem outras fontes de renda, ele próprio
            também deverá recolher o tributo devido sobre essas outras receitas.
            Nesse caso, deve ser somado todo o montante e deduzir o que já foi
            recolhido pela empresa.
          </ContentP>
          <ContentP>
            Sobre isso, também é importante frisar que o dono do negócio precisa
            ter muita atenção na hora de repassar esses valores ao órgão
            competente. Isso porque, caso ele deixe de pagar determinados
            valores, pode ser entendido que o empresário cometeu o crime de
            apropriação indébita, ou seja, o apossamento de algo que lhe foi
            confiado e precisaria ser devolvido depois. Esse fato pode gerar
            problemas graves para a empresa, podendo atingir até a pessoa do
            empresário.
          </ContentP>
        </ContentDiv>
        <Title>Seus Funcionarios</Title>
        <ContentDiv>
          <ButtonWrapper>
            <ButtonAdd>
              <AddIcon className="fas fa-plus"></AddIcon>
            </ButtonAdd>
          </ButtonWrapper>
          <TableComponent Employess={ dataEmployess } />
        </ContentDiv>
      </ContentDiv>
    </Container>
  );
};

export default Home;
