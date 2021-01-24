import react from 'react'
import NavigationBar from './NavigationBar'
import Image from 'react-bootstrap/Image'

class Quiz extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                //HTML GOES HERE
            <div>
                <NavigationBar></NavigationBar>
                <div align="center" class="col-md-6 mx-auto">
                    <h1>quizzie yey</h1>
                    
                </div>
                <div class="col-md-8 wx-auto" align='left'>
                    <h5>1. Name the atmospheric layer closest to the ground</h5>
                    <p>A.Troposphere</p>
                    <p>B.Mesosphere</p>
                    <p>C.Thermosphere </p>
                    <p>D.Stratosphere</p>
                    <h5>2. The most abundant gas on the earth’s atmosphere is</h5>
                    <p>A.Oxygen</p>
                    <p>B.Carbon</p>
                    <p>C.Nitrogen </p>
                    <p>D.Hydrogen</p>
                    <h5>3. What atmospheric layer has most of the clouds?</h5>
                    <p>A.Mesosphere</p>
                    <p>B.Thermosphere</p>
                    <p>C.Exosphere </p>
                    <p>D.Troposphere</p>
                    <h5>4. Name the atmospheric layer that is completely cloudless and free of water vapor.</h5>
                    <p>A.Exosphere</p>
                    <p>B.Troposphere</p>
                    <p>C.Thermosphere </p>
                    <p>D.Stratosphere</p>
                    <h5>5. What is the average atmospheric pressure at sea level as defined by the International Standard Atmosphere?</h5>
                    <p>A.101325 pascals</p>
                    <p>B.14.6959 pascals</p>
                    <p>C.1013 pascals </p>
                    <p>D.984.43 pascals</p>
                </div>
            </div>
        )
    }
}
export default Quiz;
