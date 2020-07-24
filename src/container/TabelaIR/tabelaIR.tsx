import React from 'react';

import {
    Container,
    ContentDiv,
    ContentP,
    Title,
} from "./style";
import Table  from "../../components/Table";


const _TabelaIR = () => {
    return (
        <Container>
            <ContentDiv>
             <Title>Tabelas e cálculos do IRRF</Title>
            <ContentDiv>
            <ContentP>
            A tabela do IR é um dos principais instrumentos para
            auxiliar os contribuintes na hora de enviar as informações fiscais
            para a Receita. Afinal, é nesse documento que constam as alíquotas
            do Imposto de Renda.
            </ContentP>
            <ContentP>
            Isso quer dizer que é essa a fonte para você saber qual é o 
            percentual que deve ser aplicado sobre os seus rendimentos.
            Portanto, na hora de fazer o cálculo e declarar seus rendimentos,
            ter essa tabela é fundamental para que você não envie nenhum dado
            errado e, consequentemente, não caia na malha fina. 
            </ContentP>
            </ContentDiv>
            <ContentDiv>
                <Title>Seus Funcionários</Title>
                <ContentDiv>
                <Table/>
                </ContentDiv>
            </ContentDiv>
            </ContentDiv>
        </Container>

    )
}

export default _TabelaIR;