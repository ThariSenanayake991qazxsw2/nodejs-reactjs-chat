import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatPage = (props) => {
    const chatProps=useMultiChatLogic(
        '35a9141f-07be-437e-a35f-cc1c4a06d9c2',
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height:'100vh'}}>
            <MultiChatSocket{...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
        </div>
    )
}

export default ChatPage;