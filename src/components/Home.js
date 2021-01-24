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
            hasData:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        //This is where we contact my api
        let origin = this.state.origin
        let destination = this.state.destination
        let url = "http://localhost:8080/requestcarbonfootprint?origin="+origin+"&destination="+destination+"&key=AIzaSyATB_BqUvfTNkWx2HEBSuUF0AolG_d88Lg"
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
    render () {

        const form = (  <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
                            <h2 className="text">Welcome, lets get you started.</h2>
                            <form onSubmit={this.handleSubmit} noValidate style={{display:'flex', flexDirection:'column'}}>
                            <div className="form">
                                <input className="input" onChange={(text) => this.setState({origin:text.target.value})} placeholder="Origin"></input>
                                <input className="input" onChange={(text) => this.setState({destination:text.target.value})} placeholder="Destination"></input>
                                {this.Button()}
                            </div>
                            </form>
                        </div>)



        const data = (
                <div style={{display:'flex',flex:10, flexDirection:'column', alignItems:'center'}}>
                <h2 className="text" style={{marginBottom:'30px'}}>Your results are here!</h2>
                <h5 className="text" style={{marginBottom:'30px'}}>Click on them to learn more.</h5>
                <h5 className="text" style={{marginBottom:'60px'}}>You will travel a total distance of {this.state.distance} in {this.state.time} in a car</h5>

                <CardColumns style={{display:'flex',marginBottom:'60px'}}>
                    <CustomCard src={Airplane} header={this.state.airplane.toFixed(decimals)+label} title="Airplane" body="Airplanes are fun to travel, but are they efficient?" bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard src={Car} header={this.state.car.toFixed(decimals)+label} title="Car" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard src={Train} header={this.state.train.toFixed(decimals)+label} title="Car" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard src={Bus} header={this.state.bus.toFixed(decimals)+label} title="Car" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                </CardColumns>
                <CardColumns style={{display:'flex'}}>
                    <CustomCard src={Hybrid} header={this.state.hybrid.toFixed(decimals)+label} title="Car" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard src={Motorcycle} header={this.state.motorcycle.toFixed(decimals)+label} title="Car" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                    <CustomCard src={Running} header={this.state.running.toFixed(decimals)+label} title="Car" body="We drive our car a lot, lets see how much you do." bodyExpanded="This is a more detailed message about driving cars. How do you think this compares to what you thought?"/>
                </CardColumns>
                </div>)
        
        
        
        
        return (
            <div>
                <NavigationBar/>
                {(this.state.hasData) ? data : data}
            </div>

        );
    }
}
export default Home;