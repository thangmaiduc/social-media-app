import {Chat, Notifications, Person, Search} from '@material-ui/icons';
import './topbar.css';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
function Topbar() {
    const [state] = useContext(AuthContext)
    const {user}=state
    return ( 
    <div className="topbar">
        <div className="topbarLeft">
            <Link to='/'>
            <p className='topbarLogo'>Social Media</p>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="topbarSearchInput">
                <Search/>
                <input type="text" className="searchInput" 
                    placeholder='search for friend post'
                />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Home</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
            <Link to ={'/profile/'+user.username}>
            <img src={
                user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            } className="img" alt=''/>
            </Link>

        </div>
    </div>
   
    );
}

export default Topbar;