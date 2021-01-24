import react from "react";
import "../quiz.css";
import NavigationBar from "./NavigationBar";
import Image from "react-bootstrap/Image";
import Question from "./question";
import aos from 'aos';
import CardColumns from "react-bootstrap/CardColumns";

function makeRed() {
  document.getElementsByName("q1").style.color[0] = "red";
}
function makeGreen() {
  document.getElementsByName("q1").style.color[0] = "green";
}

class Quiz extends react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      //HTML GOES HERE

      <div>
        <NavigationBar></NavigationBar>

        <link rel="stylesheet" href="../App.css"></link>

        <div align="center" class="col-md-6-mx-auto">
          <h1 data-aos="zoom-in-right" data-aos-delay="400">Test your knowledge on environmental pollution!</h1>
        </div>
        <div align="center" style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <div class="col-md-6 wx-auto" align="center">
          <CardColumns style={{ display: "flex", height: "20%", marginBottom:'6%' }}>
              <Question
                class="q1"
                question="1. True or False. Carbon dioxide emissions must be reduced by 55% in the next ten years in order to limit the rise of global temperature of only 1.5 degree celsius or less."
                correct={true}
              />
              <Question
                class="q2"
                question="2. Carbon dioxide is the biggest greenhouse gas, contributing 36-72 % of the greenhouse effect"
                correct={false}
              />
            </CardColumns>
            <CardColumns style={{ display: "flex", height: "20%", marginBottom:'6%' }}>
            <Question
              class="q3"
              question="3. Methane has 28 times the greenhouse effect carbon dioxide has on the environment."
              correct={true}
            />
            <Question
              class="q4"
              question="4. USA produces the most carbon dioxide per capita in the world. True. The biggest contribution to climate change is the burning of fossil fuels."
              correct={false}
            />
          </CardColumns>
          <CardColumns style={{ display: "flex", height: "20%", marginBottom:'6%' }}>
            <Question
              class="q5"
              question="5. Every four pounds of beef you eat contributes to as much global warming as flying from New York to London. "
              correct={true}
            />
            <Question
              class="q6"
              question="6. The world average temperature is 10 degrees celsius"
              correct={false}
            />
            </CardColumns>
            <CardColumns style={{ display: "flex", height: "20%", marginBottom:'6%' }}>
            <Question
              class="q7"
              question="7. 60 percent of the carbon dioxide emissions become a part of the atmosphere, while the rest is absorbed by the oceans and land."
              correct={false}
            />
            <Question
              class="q8"
              question="8. 2400000000000 tons or 2.4 gigatons of CO2 emissions has been created as a result of human activity from 1850 to 2019."
              correct={true}
            />
          </CardColumns>
        </div>
        </div>
      </div>
    );
  }
}
export default Quiz;
