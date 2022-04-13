import "./message.css"
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
        <div className={own ? "messageWrapper own" : "messageWrapper"}>
            <img src={PF+'person/1.jpeg'} alt="" className="messageImg"/>
            <p className="messageText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, laboriosam corporis nostrum sequi exercitationem rem quia rerum necessitatibus impedit ipsum et dicta enim officia. Id rem explicabo aliquam et repellendus?</p>
        </div>
    </div>
  )
}

export default Message