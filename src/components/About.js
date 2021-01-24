import react from 'react';
import NavigationBar from './NavigationBar';
import Image from 'react-bootstrap/Image';
import Chart from '../img/chart.png';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class About extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            //HTML
            <div>
                <NavigationBar></NavigationBar>
            <div class="title" data-aos="fade-up" data-aos-delay="400">
                <h2 >What is a carbon footprint?</h2>
            </div>
            <div class="definition" data-aos="fade-up" data-aos-delay="500">
                <h3 class="text" style={{marginLeft:'12%', marginRight:'12%'}}>
                    Carbon footprint is defined as the amount of CO2 and other carbon compounds emitted due to the consumption of
                    fossil fuels by a particular person or group. While a variety of sources contribute to the release of these
                    gases as shown below, the largest of these is the transportation sector, accounting for 29% of all carbon
                    emissions according to the US EPA. It becomes increasingly important to reduce our emissions of greenhouse gases
                    in order to fight rapid climate change which may have lasting impacts on our society. This website will help you
                    track your carbon footprint while travelling between places, and compare different modes of transportation to
                    minimize your carbon emissions. That being said carbon footprints are formed in various other sectors as well.
                </h3>
            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center' }} data-aos="zoom-in" data-aos-delay="400">
                <Image src={Chart}></Image>
            </div>
            </div>
        )
    }
}
export default About;