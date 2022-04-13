import './chatOnline.css'
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function ChatOnline() {

    const handleClick = () => { }
    return (
        <div className="chatOnline">

            <div className="chatOnlineFriend" onClick={() => handleClick()}>
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={
                            PF + "person/1.jpeg"
                        }
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Thang Mai</span>
            </div>
            <div className="chatOnlineFriend" onClick={() => handleClick()}>
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={
                            PF + "person/1.jpeg"
                        }
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Thang Mai</span>
            </div>
            <div className="chatOnlineFriend" onClick={() => handleClick()}>
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={
                            PF + "person/1.jpeg"
                        }
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Thang Mai</span>
            </div>
            <div className="chatOnlineFriend" onClick={() => handleClick()}>
                <div className="chatOnlineImgContainer">
                    <img
                        className="chatOnlineImg"
                        src={
                            PF + "person/1.jpeg"
                        }
                        alt=""
                    />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">Thang Mai</span>
            </div>

        </div>
    )
}

export default ChatOnline