import react from 'react'
import NavigationBar from './NavigationBar'
import Form from './Form'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import CustomCard from './Card'
import Container from '@material-ui/core/Container'
import CardColumns from 'react-bootstrap/CardColumns'

import Car from '../img/car.png'
import Train from '../img/train.png'
import Bus from '../img/bus.png'
import Airplane from '../img/airplane.png'
import Hybrid from '../img/hybrid.png'
import Motorcycle from '../img/motorcycle.png'
import Running from '../img/running.png'
import Graph from './Graph'
const label = "kg Co2"
const decimals = 2
class GetStarted extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            origin:"",
            destination:"",
            button_disabled:false,
            car:0,
            bus:0,
            airplane:0,
            train:0,
            motorcycle:0,
            hybrid:0,
            running:0,
            distance:"",
            time:"",
            best:"car",
            worst:'airplane',
            hasData:false,
            mode:"driving",
            miles:-1
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        //This is where we contact my api
        let origin = this.state.origin
        let destination = this.state.destination
        let mode = this.state.mode;
        let url = "http://localhost:8080/requestcarbonfootprint?origin="+origin+"&destination="+destination+"&mode="+mode+"&key=AIzaSyATB_BqUvfTNkWx2HEBSuUF0AolG_d88Lg"
        axios.get(url).then(res => {
            let distance = parseInt(res.data.miles)
            console.log(res.data)
            this.setState({
                button_disabled:false, 
                car:res.data.car,
                bus:res.data.bus,
                airplane:res.data.airplane,
                train:res.data.train,
                motorcycle:res.data.motorcycle,
                hybrid:res.data.hybrid,
                running:res.data.running,
                distance:res.data.distance,
                time:res.data.time,
                hasData:true
            });
            console.log("Distance is " + distance)
            let best = ""
            let worst = ""
            if (distance < 2) {
                best = 'bicycle'
                worst = 'airplane'
            } else if (distance < 200) {
                best = 'hybrid'
                worst = 'airplane'
            } else if (distance < 400) {
                best = 'train'
                worst = 'car'
            } else {
                best = 'airplane'
                worst = 'bicycle'
            }

            this.setState({best:best, worst:worst})

        }).catch(err => {
            console.log(err)
            this.setState({button_disabled:false});
        })
        this.setState({button_disabled:true});
        
        event.preventDefault();
    }
    Button = () => {
        if (this.state.button_disabled) {
            return <Button disabled type="submit" className="Button" style={{marginTop:'50px', width:'100%', height:'50px'}}>Working...</Button>
        }
        return <Button type="submit" className="Button" style={{marginTop:'50px', width:'100%', height:'50px'}}>Get Emissions</Button>
    }
    handleInputChange = (event) => {
        this.setState({mode:event.target.value});
    }
    render () {

        const form = (  <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                            <h2 className="text" style={{marginBottom:'3%'}}>Welcome, lets get you started.</h2>
                            <h6 className="text" style={{marginBottom:'3%'}}>Go ahead and put in where you are going.</h6>
                            <form onSubmit={this.handleSubmit} noValidate style={{display:'flex', flexDirection:'column'}}>
                            <div className="form">
                                <input className="input" onChange={(text) => this.setState({origin:text.target.value})} placeholder="Origin"></input>
                                <input className="input" onChange={(text) => this.setState({destination:text.target.value})} placeholder="Destination"></input>
                                    <h6 className="text" style={{marginTop:'50px'}}>Form of Transportation</h6>
                                    <select className="form-control" name="method" onChange={this.handleInputChange} style={{marginTop:'0px',height:'50px'}}>
                                        <option selected value="driving">Car</option>
                                        <option value="walking">Walking</option>
                                        <option value="transit">Public Transportation</option>
                                        <option value="bicycling">Bicycle</option>
                                    </select>
                                {this.Button()}
                            </div>
                            </form>
                        </div>)



        const data = (
                <div style={{display:'flex',flex:10, flexDirection:'column', alignItems:'center'}}>
                <h2 className="text" style={{marginBottom:'30px'}}>Your results are here!</h2>
                <h5 className="text" style={{marginBottom:'30px'}}>Click on the cards to learn more.</h5>
                <h5 className="text" style={{marginBottom:'60px'}}>You will travel a total distance of {this.state.distance} in {this.state.time} using a {this.state.mode}</h5>

                <CardColumns style={{display:'flex',marginBottom:'60px'}}>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Airplane} header={this.state.airplane.toFixed(decimals)+label} title="airplane" body={AirplaneQuote} bodyExpanded={AirplaneBody}/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Car} header={this.state.car.toFixed(decimals)+label} title="car" body={CarQuote} bodyExpanded={CarBody}/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Train} header={this.state.train.toFixed(decimals)+label} title="train" body={TrainQuote} bodyExpanded={TrainBody}/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Bus} header={this.state.bus.toFixed(decimals)+label} title="bus" body={BusQuote} bodyExpanded={BusBody}/>
                </CardColumns>
                <CardColumns style={{display:'flex'}}>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Hybrid} header={this.state.hybrid.toFixed(decimals)+label} title="hybrid" body={HybridQuote} bodyExpanded={HybridBody}/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Motorcycle} header={this.state.motorcycle.toFixed(decimals)+label} title="motorcycle" body={MotorcycleQuote} bodyExpanded={MotorcycleBody}/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Running} header={this.state.running.toFixed(decimals)+label} title="bicycle" body={BikeQuote} bodyExpanded={BikeBody}/>
                </CardColumns>
                <div style={{height:200}}/>
                </div>)
        
        
        
        const graph = (
            <div style={{display:'flex', alignItems:'center',margin:'5%', flexDirection:'row'}}>
                <Graph style={{marginLeft:'3%'}} />
                <h3 className="text">While most Co2 emissions are rising, we can stop it. If my grandmother can do it, I know you can too.</h3>
            </div>
        )
        return (
            <div>
                <NavigationBar/>
                {(this.state.hasData) ? data : data}
            </div>

        );
    }
}
export default GetStarted;

const TrainQuote = "Passenger trains are used very infrequently for travel in the US. Is there a reason for the lack of love for them?"
const TrainBody = "As it turns out, trains have the potential to be one of the more efficient modes of transportation with an average person-miles per gallon (pmpg) of 71.6 compared to cars with only an average of 35 pmpg. However they are unpopular in the US due to the lack of routes between many major cities and suburbs, however trains still remain the uncrowned kings for transporting extremely heavy goods cheaply and efficiently, albeit slowly."

const BusQuote = "Public transportation, especially buses are said to be one of the most environmentally friendly and economical modes of transportation. Do the numbers agree with this?"
const BusBody = "When busses are fully loaded with roughly 60 passengers they are indeed very fuel efficient, with potentially max pmpg of 330, in reality they have the disappointing pmpg of 38.8 making them only slightly better than cars.This is because most buses are near empty except for peak traffic hours. However, they still hold a lot of potential to reduce your carbon footprint with their rising popularity."

const HybridQuote = "Electric vehicles are all the buzz today, but is all this hype around them uncalled for, or are they really the future?"
const HybridBody = "Most fossil fuel based cars use less than 40% of the energy stored in gasoline due to energy lost, mainly to eat, whereas almost all of the energy stored in batteries of electrical vehicles is utilized. While electrical vehicles do indeed seem to be the successors to fossil fuel based cars, there are still hidden ways electrical vehicles contribute to increasing carbon emissions, such as if the electricity to charge them comes from burning fossil fuels."

const BikeQuote = "What better place to get from one place to another than bicycles? You can get in shape while travelling in the most environmentally friendly ways possible."
const BikeBody = "Bicycles have an average pmpg of 984, leaving all other modes of transportation in the dust other than walking. While not very practical for long distances, bikes can be a very fun and healthy way of getting to and fro places at short distances. Bicycling 15 mph requires only 515 calories per hour, if cars were just as efficient, this would mean that they would have a whopping fuel economy of  912 miles per gallon."

const MotorcycleQuote = "Bikes are frugal, fast, and fun. How do they compare to cars, and why are they not more widely seen on the streets?"
const MotorcycleBody = "Bikes are surprisingly more than twice as fuel efficient than cars on average while still maintaining the ability to cruise at high speeds. On the down side they produce more smog forming hydrocarbons than per passenger, have less safety, and have reduced comfort from frigid environments such as in Minnesota."

const AirplaneQuote = "Airplains may be a fun way to travel, but are they worth the money?"
const AirplaneBody = "While airplanes may be fun to travel in, they can be quite expensive. They do provide better average 'gas mileage.' While it may not be possible to fly everywhere you go, it could help limit the Co2 emission."

const CarQuote = "Cars are the most popular form of transit. Is that a good thing?"
const CarBody = "Cars are one of the most popular modes of transport. It can be tempted to drive everywhere you go, but cars produce around 1,095 million metric tons of Co2 a year. And that is only in the US."