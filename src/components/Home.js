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
                <div align="center" class="col-md-6 mx-auto">
                    <h3>Welcome to CarbonWalk!</h3>
                    <p>
                        CarbonWalk is a utility that helps our planet by finding out the most efficient mode of transportation for your travel needs. You can begin by entering your destination and your starting point, and CarbonWalk will calculate the amount of CO2 you will emit with each possible mode of transportation. Give it a try!
                    </p>
                    
                    <h3>How to Use:</h3>
                    <p>Go to the "Get Started" page and enter information. Then, when you submit, you will see results telling you which is your most efficient mode of transportation. Refer to the example below:</p>
                    <Image style={{width: '35%'}} src={Ex1} />
                    <Image style={{width: '60%'}} src={Ex2} />
                </div>
            </div>
        )
    }
}
export default Home;