import { Add, PermMedia } from '@material-ui/icons'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import Conversation from '../../components/conversation/Conversation'
import Message from '../../components/message/Message'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input type="text" placeholder='search for friends' className="chatMenuInput" />
            <Conversation />
            <Conversation />
            <Conversation />
            <Conversation />
           
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message/>
              <Message own={true}/>
              <Message/>
              <Message/>
              <Message/>
            </div>
           <div className="chatBoxBottom">
              
              <textarea className='chatBoxInput' placeholder='Aa'></textarea>
              <button className="chatBoxButton">Send</button>
           </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
             
            />
          </div>
        </div>
      </div>
    </>
  )
}
