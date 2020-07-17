import styled from 'styled-components';

  


export const StyledTable = styled.table`
        width: 100%;
        margin-bottom: 1rem;
        color: #212529;
        th{
            vertical-align: bottom;
            border-bottom: 2px solid #dee2e6;
            padding: .75rem;
            border-top: 1px solid #dee2e6;
        }
        td{
            padding: .75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6; 
        }
        tr:first-child{
            td{
                border-top: none;       
            }
        }
`;


export const RemoveButton = styled.button`
background: rgb(0,97,255);
border-width: 6px;
border-style: solid;
border-color: rgb(255,255,255);
border-image: initial;
border-radius: 5rem;
width: 3rem;
align-items: center;
height: 2rem;
justify-content: center;
}
`;
export const RemoveIcon = styled.i`
color: white;
`;

