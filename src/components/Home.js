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

const label = "kg Co2"
const decimals = 2
class Home extends react.Component {
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
            mode:"driving"
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
                best:"car",
                worst:"airplane",
                hasData:true});
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
                            <h2 className="text">Welcome, lets get you started.</h2>
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
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Airplane} header={this.state.airplane.toFixed(decimals)+label} title="airplane" body="Airplanes are fun to travel, but are they worth the money?" bodyExpanded={AirplaneBody}/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Car} header={this.state.car.toFixed(decimals)+label} title="car" body="We drive our car a lot, lets see how much you do." bodyExpanded={CarBody}/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Train} header={this.state.train.toFixed(decimals)+label} title="train" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Bus} header={this.state.bus.toFixed(decimals)+label} title="bus" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                </CardColumns>
                <CardColumns style={{display:'flex'}}>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Hybrid} header={this.state.hybrid.toFixed(decimals)+label} title="hybrid" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Motorcycle} header={this.state.motorcycle.toFixed(decimals)+label} title="motorcycle" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard worst={this.state.worst} best={this.state.best} src={Running} header={this.state.running.toFixed(decimals)+label} title="bicycle" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                </CardColumns>
                </div>)
        
        
        
        
        return (
            <div>
                <NavigationBar/>
                {(this.state.hasData) ? data : form}
            </div>

        );
    }
}
export default Home;


const AirplaneBody = "While airplanes may be fun to travel in, they can be quite expensive. They do provide better average 'gas mileage.' While it may not be possible to fly everywhere you go, it could help limit the Co2 emission."
const CarBody = "Cars are one of the most popular modes of transport. It can be tempted to drive everywhere you go, but cars produce around 1,095 million metric tons of Co2 a year. And that is only in the US."