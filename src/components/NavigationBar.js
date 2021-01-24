import react from "react"
import { withRouter } from 'react-router'
import { useHistory, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Logo from '../img/logo.png'

class NavigationBar extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="navbar">
                <div style={styles.left}>
                    <a href="https://www.google.com/maps" className="text-button">Google Maps</a>
                    <Link style={{marginLeft:'20px'}} className="text-button" to="/about">About</Link>
                </div>
                <div style={styles.center}>
                    <Image src={Logo} style={{height:'75px', marginTop:'-8px'}}></Image>
                </div>
                <div style={styles.right}>
                
                </div>
            </div>
        );
    }
}
export default withRouter(NavigationBar);


const styles = {
    left:{display:'flex',flex:'10', flexDirection:'row', justifyContent:'flex-start'},
    right:{display:'flex',flex:'10', flexDirection:'row',  justifyContent:'flex-end'},
    center:{display:'flex',flex:'1', flexDirection:'row', justifyContent:'center'}
}