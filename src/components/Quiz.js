import react from 'react'

import NavigationBar from './NavigationBar'
import Image from 'react-bootstrap/Image'
import Question from './question'

function makeRed() {
    document.getElementsByName('q1').style.color[0] = 'red'
}
function makeGreen() {
    document.getElementsByName('q1').style.color[0] = 'green'
}

class Quiz extends react.Component {
    
    constructor(props) {
        super(props)
      }
      
    render() {
        return (
                //HTML GOES HERE
                
            <div>
                <NavigationBar></NavigationBar>

                <link rel='stylesheet' href='../App.css'></link>
                
                <div align="center" class="col-md-6 mx-auto">
                    <h1 >Test your knowledge on environmental pollution!</h1>
                </div>
                <div class="col-md-6 wx-auto" align='left' margin-left='30%'>
                    <Question question="1. True or False. Carbon dioxide emissions must be reduced by 55% in the next ten years in order to limit the rise of global temperature of only 1.5 degree celsius or less." correct={true}/>
                    <Question question="2. Carbon dioxide is the biggest greenhouse gas, contributing 36-72 % of the greenhouse effect" correct={false}/>
                    <Question question="3. Methane has 28 times the greenhouse effect carbon dioxide has on the environment." correct={true}/>
                    <Question question="4. USA produces the most carbon dioxide per capita in the world. True. The biggest contribution to climate change is the burning of fossil fuels." correct={false}/>
                    <Question question="5. Every four pounds of beef you eat contributes to as much global warming as flying from New York to London. " correct={true}/>
                    <Question question="6. The world average temperature is 10 degrees celsius" correct={false}/>
                    <Question question="7. 60 percent of the carbon dioxide emissions become a part of the atmosphere, while the rest is absorbed by the oceans and land." correct={false}/>
                    <Question question="8. 2400000000000 tons or 2.4 gigatons of CO2 emissions has been created as a result of human activity from 1850 to 2019." correct={true}/>
                </div>
            </div>
        )
    }
}
export default Quiz;
