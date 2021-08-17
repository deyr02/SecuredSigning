import { Button, Icon, Message, Modal } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

interface Props{
    messageType:string,
    message:string,
    confirm: ()=> void
    

}

export default function MessageComponent({  messageType, message, confirm}:Props){
    const{modalStore}=useStore();
   


    const textcolor = messageType === "warning"? "red": "green";
    return(
        <>
        <Message icon>
            <Icon name='circle notched' loading />
            <Message.Content>
                <Message.Header  as='h2' style= {{color: textcolor}}  >{messageType.toUpperCase()} </Message.Header>
                {message}
            </Message.Content>
        </Message>

        <Modal.Actions style= {{display:"flex", justifyContent: "flex-end"}}>
            <Button  color={textcolor} onClick={ confirm}  >Confirm</Button>
            <Button  color='grey' onClick={() => modalStore.closeModal()}> Cancel </Button>
        </Modal.Actions>
        
        </>

    )
}