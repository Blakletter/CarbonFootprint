import react from "react"
import { withRouter } from 'react-router'
import { useHistory, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Logo from '../img/logo.png'
import { useLocation } from 'react-router-dom'


function NavigationBar () {
    let location = useLocation();


    const homeSelected = (location.pathname==="/home") ? 'red' : ''
    const aboutSelected = (location.pathname==="/about") ? 'red' : ''
    const getStartedSelected = (location.pathname==="/getstarted") ? 'red' : ''
    const quizSelected = (location.pathname==="/quiz") ? 'red' : ''
    const interactiveSelected = (location.pathname==="/interactive") ? 'red' : ''
    return (
        
        <div className="navbar">
            <div style={styles.left}>
                <Link style={{marginLeft:'4%', color:homeSelected}} className="text-button" to="/home">Home</Link>
                <Link style={{marginLeft:'4%', color:getStartedSelected}} className="text-button" to="/getstarted">Get Started</Link>
                <Link style={{marginLeft:'4%', color:aboutSelected}} className="text-button" to="/about">About</Link>
                <Link style={{marginLeft:'4%', color:quizSelected}} className="text-button" to="/quiz">Quiz</Link>
                <Link style={{marginLeft:'4%', color:interactiveSelected}} className="text-button" to="/interactive">Interactive Demo</Link>
            </div>
            <div style={styles.center}>
                <Image src={Logo} style={{height:'75px', marginTop:'-8px'}}></Image>
            </div>
            <div style={styles.right}>
            <a href="https://www.google.com/maps" className="text-button">Google Maps</a>
            </div>
        </div>
    );
}
export default withRouter(NavigationBar);


const styles = {
    left:{display:'flex',flex:'10', marginLeft:'1%',flexDirection:'row', justifyContent:'flex-start'},
    right:{display:'flex',flex:'10', flexDirection:'row',marginRight:'2%',  justifyContent:'flex-end'},
    center:{display:'flex',flex:'1', flexDirection:'row', justifyContent:'center'}
}