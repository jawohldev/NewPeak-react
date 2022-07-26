import newPeakLogo from '../../static/newpeak-logo.png'
import "./NavBar.css"
const homeLink = ""

const NavBar = () => {
    
    return(
    <div className="NavBar">
        
        <div className="nav-bar-flex">
            <img src={newPeakLogo} alt='newpeak logo'/>
            <ul>
                <li><a href={homeLink}><strong>Home</strong></a></li>
                <li><a href={homeLink}><strong>Contact Us</strong></a></li>
                <li><a href={homeLink}><strong>About</strong></a></li>
            </ul>
        </div>
        <hr/>
    </div>
    
 )
}
export default NavBar