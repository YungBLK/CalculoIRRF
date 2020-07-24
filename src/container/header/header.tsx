import React from 'react';
import logo from './../../assets/images/4tax_simbolo_negativo.png';


import {
    StyledHeader,
    Container,
    AnchorImg,
    MiniImg,
    Menu,
    Option,
    Anchor
} from "./style";




const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <AnchorImg href="/">
                    <MiniImg src={logo} alt=""/>
                </AnchorImg>
                <div>
                    <Menu>
                        <Option><Anchor to="/">Registrar Funcionario</Anchor></Option>
                        <Option><Anchor to="/tabela-irrf">Tabelas e cálculos do IRRF</Anchor></Option>
                    </Menu>
                </div>
            </Container>
        </StyledHeader>
    )
}


export default (Header)

