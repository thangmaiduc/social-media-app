import './share.css'
import { PermMedia, Label, Room, EmojiEmotions, CancelRounded } from '@material-ui/icons';
import { AuthContext } from '../../store/AuthContext';
import { useContext, useRef, useState } from 'react';
import axios from 'axios';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function Share() {
    const [state] = useContext(AuthContext)
    const {user}=state
    const desc = useRef();
    const handleSubmit=async (e) => {
        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("name", fileName);
          data.append("file", file);
          newPost.img = fileName;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          await axios.post("/posts", newPost);
          window.location.reload();
        } catch (err) {}
      };
    const [file,setFile] =useState();
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  } alt="" className="shareImgProfile" />
                    <input ref={desc} type="text" className="shareInput" placeholder='What is in your mind ' />
                </div>
                <hr className="shareHr" />
                {file &&
                (<div className="shareImgWrapper">
                  <img src={URL.createObjectURL(file)} alt="" className="shareImg" />
                  <CancelRounded className='cancelButton' onClick={()=>setFile(null)}/>
                </div>)
                }
                <form className="shareBottom"  encType="multipart/form-data"  onSubmit={handleSubmit}>
                    <div  className="shareOptions">
                        <label className="shareOption" htmlFor="shareInputImg" >
                            <PermMedia htmlColor="tomato" className="shareIcon" />
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{display:'none'}} type='file' id = 'shareInputImg' accept='.png,.jpeg' onChange={e=> setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon" />
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon" />
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type='submit'>Share</button>

                </form>
            </div>
        </div>
    );
}

export default Share;