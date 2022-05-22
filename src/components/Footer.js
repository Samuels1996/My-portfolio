import Linkedin from '../images/linkedin.png';
import Github from '../images/github-logo.png';
import Stackflow from '../images/stack-overflow.png'
import { NavLink } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer">
                <a href="https://github.com/Samuels1996"><img src={Github} alt='Git logo' /></a>
                <a href="https://www.linkedin.com/in/brian-samuels-03458b14a/"><img src={Linkedin} alt='Linked in logo' /></a>
                <a href="https://stackoverflow.com/questions/2281087/center-a-div-in-css/"><img src={Stackflow} alt='Stackoverflow logo' /></a>
        </footer>
    );
}

export default Footer;