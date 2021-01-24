import react from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from './data';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
class Graph extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryData:[]
        }
    }


    updateData = (object) => {
        let data = []
        for (const [key, value] of Object.entries(object)) {
          for (const [key2, value2] of Object.entries(value)) {
            console.log(key2 + value2)
            data.push({x:key2, y:value2})
          }
        }
        
        this.setState({countryData:data})
    }

    render () {
        return (
            <div class = "parent">
                <div class="graph-container" data-aos="fade-right" data-aos-delay="400">
                    <VictoryChart domainPadding={20} theme={VictoryTheme.material} >
                        <VictoryLine height={500} interpolation="natural" data={this.state.countryData} animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}/>
                    </VictoryChart>
                </div>
                <div class="text-container" data-aos="fade-left" data-aos-delay="400">
                    <h2 style={{marginBottom:'50px'}}className="text" data-aos="fade-up" data-aos-delay="500">The data on this chart represents the amount of Co2 emission each country has had per capita in metric tonnes.</h2>
                    <h5 style={{marginBottom:'50px'}}className="text" data-aos="fade-up" data-aos-delay="550">Choose your country to get started!</h5>
                    <Autocomplete
                        onChange={(event, value) => (value==null) ? '': this.updateData(value.data)}
                        id="combo-box-demo"
                        options={countries}
                        getOptionLabel={(option) => option.country}
                        style={{ width: 400, height:'300' }}
                        renderInput={(params) => <TextField {...params} label="Choose your Country" variant="outlined" />}
                        
                    />
                </div>
            </div>
            )
        }
}
export default Graph;
