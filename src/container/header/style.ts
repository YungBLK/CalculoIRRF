import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    display: flex;
    background-color: #464555;
`;

export const Container = styled.section`
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 1170px;
    display: flex;
    justify-content: space-between;
    
    @media (min-width: 768px) {
        flex-direction: column;

        .container {
            width: 750px;
        }
    }
    @media (min-width: 992px) {
        .container {
            width: 970px;
        }
    }
    @media (min-width: 1200px) {
        .container {
            width: 1170px;
        }
    }
`;

export const AnchorImg = styled.a`
    padding: 13px 16px;
    @media (min-width: 768px){
        padding: 13px 16px;
        display: block;
        width: auto;
        text-align: center;
    }   
`;
export const MiniImg = styled.img`
width: 35px;
height: auto;
font-size: .78571429rem;
`;
export const navDiv = styled.div`

`;
export const Menu = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
`;
export const Option = styled.li`
    margin-right: 1.5rem;
`;

export const Anchor = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 28px;
    &::hover{
        margin-bottom: 2px solid white;
    }
`;



