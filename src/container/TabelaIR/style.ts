import styled from 'styled-components'

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
export const ContentDiv = styled.div`
flex: 0 0 100%;
max-width: 100%;
background-color: white;
padding: 20px 30px;
margin: 20px auto;
`;
export const ContentP = styled.p`
font-size: 18px;
color: rgb(70, 69, 85);
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 1rem;
margin-bottom: 1rem;
`;
export const ButtonAdd = styled.button`
display: flex;
background: rgb(0, 97, 255);
border-width: 6px;
border-style: solid;
border-color: rgb(255, 255, 255);
border-image: initial;
border-radius: 5rem;
width: 4rem;
height: 2.3rem;
justify-content: center;
align-items: center;
`;
export const AddIcon = styled.i`
color: white;
font-size: 1rem;
`;
export const Table = styled.table`

`;
export const Thead = styled.table`
vertical-align: middle;
border-color: inherit;
`;
export const Tr = styled.table`
vertical-align: inherit;
border-color: inherit;
`;
export const Th = styled.table`
vertical-align: bottom;
border-bottom: 2px solid #dee2e6;
`;
export const Tbody = styled.table`

`;
export const TbodyTh = styled.th`
padding: .75rem;
vertical-align: top;
border-top: 1px solid #dee2e6;
`;
export const TbodyTd = styled.th`

padding: .75rem;
vertical-align: top;
border-top: 1px solid #dee2e6;

`;

export const Title = styled.h1`
color: rgb(70, 69, 85);
font-size: 1.5rem;
text-align: center;
color: gray:
`;



