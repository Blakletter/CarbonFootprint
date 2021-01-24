import react from 'react'
import NavigationBar from './NavigationBar'
import Image from 'react-bootstrap/Image'
import Ex1 from '../img/example1.png'
import Ex2 from '../img/example2.png'

class Home extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                //HTML GOES HERE
            <div>
                <NavigationBar></NavigationBar>
                <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                    <div class="home-parent" align="center">
                        <div class="home-content" style={{alignItems:'center'}} >
                            <div style={{padding:'10%'}}>
                            <h3 class="text" style={{marginBottom:'4%'}} >Welcome to CarbonWalk!</h3>
                            <h5 class="text" style={{marginBottom:'6%'}}>
                                CarbonWalk is a utility that helps our planet by finding out the most efficient mode of transportation for your travel needs. You can begin by entering your destination and your starting point, and CarbonWalk will calculate the amount of CO2 you will emit with each possible mode of transportation. Give it a try!
                            </h5>
                            
                            <h3 class="text" style={{marginBottom:'4%'}}>How to Use:</h3>
                            <h5 class="text" >Go to the "Get Started" page and enter information. Then, when you submit, you will see results telling you which is your most efficient mode of transportation. Refer to the example below:</h5>
                            </div>
                            <div style={{display:'flex',flexDirection:'column'}}>
                                <Image style={{width: '100%',transform:'rotate(-10deg)', marginBottom:'20%'}} src={Ex1} />
                                <Image style={{width: '80%',transform:'rotate(10deg)'}} src={Ex2} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;