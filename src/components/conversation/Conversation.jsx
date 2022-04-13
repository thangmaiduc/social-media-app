import './conversation.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function Conversation() {
  return (
    <div className="conversation">
        <div className="conversationWrapper">
            <img src={PF+'person/1.jpeg'} alt="" className="conversationImg" />
            <span className="conversationName">Thang Mai</span>
        </div>
    </div>
  )
}

export default Conversation