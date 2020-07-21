import React, {useEffect} from 'react';

import {  
     ModalBackDrop,
     ModalBody,
     ModalWrapper,
     ModalDialog,
     ModalContent,
     ModalTitle,
     PrimaryButton,
     SecondaryButton,
     ModalHeader,
     ModalFooter
 } from "./styles";

 

 interface IProps  {
     open: boolean;
     id?: number;
     onClose: (op:boolean, id?:number) => void;
     clean: boolean;
     title: string;
     secondary?: boolean;
   }

  
const ModalComponent: React.FC<IProps> = (props) => {

    const { open, onClose, id, title } = props;
    
    console.log('aqqq',id);

    useEffect(() => {
        (open) ? document.body.classList.add('modalOpen') : document.body.classList.remove('modalOpen');
    });


     if(open){
     return (
         <>
         <ModalBackDrop></ModalBackDrop>
         <ModalWrapper >
             <ModalDialog>
                     <ModalContent>
                             <ModalHeader>
                                     <ModalTitle>{title}</ModalTitle>
                             </ModalHeader>
                             <ModalBody>

                             </ModalBody>
                             <ModalFooter>
                              <PrimaryButton onClick={ () => onClose(true, id)} type="button">Salvar</PrimaryButton>
                              <SecondaryButton onClick={ () => onClose(false, id)}>Voltar</SecondaryButton>
                             </ModalFooter>
                     </ModalContent>
             </ModalDialog>
         </ModalWrapper>
         </> 
        );
     }else {
         return null;
     }
 }
 
export default ModalComponent;