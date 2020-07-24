import  styled  from 'styled-components';




export const StyledForm = styled.form`
    label{
        display: block;
        margin: 0 0 .28571429rem 0;
        color: rgba(0,0,0,.87);
        font-size: .92857143em;
        font-weight: 700;
        text-transform: none;
    }
    input[type=text],input[type=number] {
        width: 100%;
        vertical-align: top;
        margin: 0;
        outline: 0;
        line-height: 1.21428571em;
        padding: .67857143em 1em;
        font-size: 1em;
        background: #fff;
        border: 1px solid rgba(34,36,38,.15);
        color: rgba(0,0,0,.87);
        border-radius: .28571429rem;
        box-shadow: 0 0 0 0 transparent inset;
        transition: color .1s ease,border-color .1s ease;
    }
    input[type=submit]{
        cursor: pointer;
        display: inline-block;
        min-height: 1em;
        outline: 0;
        border: none;
        vertical-align: baseline;
        background: #e0e1e2 none;
        color: rgba(0,0,0,.6);
        margin: 0 .25em 0 0;
        padding: .78571429em 1.5em .78571429em;
        text-transform: none;
        text-shadow: none;
        font-weight: 700;
        line-height: 1em;
        font-style: normal;
        text-align: center;
        text-decoration: none;
        border-radius: .28571429rem;
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
        user-select: none;
        transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
        background-color: #2185d0;
        color: #fff;
        text-shadow: none;
        background-image: none;
        box-shadow: 0 0 0 0 rgba(34,36,38,.15) inset;
        font-size: 1rem;
    }
`;