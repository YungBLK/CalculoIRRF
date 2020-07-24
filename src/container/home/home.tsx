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

import "../../assets/css/base.css";
import Form from '../../components/Form'; 

const Home = () => {
 

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
        <ContentDiv>
         <Title>Cadastrar Funcionário</Title>
          <ButtonWrapper>
            <ButtonAdd>
              <AddIcon className="fas fa-plus"></AddIcon>
            </ButtonAdd>
          </ButtonWrapper>
          <Form />
        </ContentDiv>
      </ContentDiv>
    </Container>
  );
};

export default Home;
