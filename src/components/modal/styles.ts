import styled from "styled-components";

export const ModalBackDrop = styled.div`
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1040;
        background-color: #000;
        opacity: .5;
`;


export const ModalWrapper = styled.div`
        display: block;
        padding-right: 15px;
        overflow-x: hidden;
        overflow-y: auto;
        z-index: 1072;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        outline: 0;
`;

export const ModalDialog = styled.div`
        transform: translate(0, 0);
        transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
        @media (min-width: 576px) {
            max-width: 500px;
            margin: 1.75rem auto;
        }
        position: relative;
        width: auto;
        pointer-events: none;
`;

export const ModalContent = styled.div`
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.3rem;
        outline: 0;
`;
export const ModalHeader = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #e9ecef;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
`;

export const PrimaryButton = styled.button`
        background: rgb(0,97,255);
        border: 0.5px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        margin-left: 0.5rem;
        color: white;
`;
export const SecondaryButton = styled.button`
        background: #464555;
        border: 0.5px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        display: inline-block;
        font-weight: 400;
        text-align: center;
        margin-left: 0.5rem;
        color: white;
`;


export const ModalTitle = styled.h5`
        display: block;
        text-align: center;
        width: auto;
        font-size: 1.5rem;
        color: rgb(70,69,85);
`;
export const ModalBody = styled.div`
        position: relative;
        flex: 1 1 auto;
        padding: 1rem;
`;
export const ModalFooter = styled.div`
        display: flex;
        padding: 1rem;
        justify-content: center;
`;
