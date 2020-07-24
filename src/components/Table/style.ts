import styled from 'styled-components';


export const StyledTable = styled.table`
    font-size: 1em;
    width: 100%;
    background: #fff;
    margin: 1em 0;
    border: 1px solid rgba(34,36,38,.15);
    box-shadow: none;
    border-radius: .28571429rem;
    text-align: left;
    color: rgba(0,0,0,.87);
    border-collapse: separate;
    border-spacing: 0;
    &:td:first-child{
        border-left: none;
    }
    &:th:first-child{
        border-left: none;
    }
    th{
    cursor: auto;
    background: #f9fafb;
    text-align: inherit;
    color: rgba(0,0,0,.87);
    padding: .92857143em .78571429em;
    vertical-align: inherit;
    font-style: none;
    font-weight: 700;
    text-transform: none;
    border-bottom: 1px solid rgba(34,36,38,.1);
    border-left: 1px solid rgba(34,36,38,.1);
    }
    td{
        padding: .78571429em .78571429em;
    text-align: inherit;
        border-left: 1px solid rgba(34,36,38,.1);
    }
    `;
export const Thead = styled.thead`

 `;

export const Ul =  styled.ul`

`;