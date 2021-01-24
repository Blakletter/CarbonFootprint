import react from 'react'
import { VictoryLine, VictoryChart, VictoryTheme } from 'victory';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import countries from './data'
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
            <div class = "graph">
                <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
                    <VictoryLine height={500} interpolation="natural" data={this.state.countryData} animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                    }}/>
                </VictoryChart>
                <Autocomplete
                    onChange={(event, value) => (value.data==null) ? '': this.updateData(value.data)}
                    id="combo-box-demo"
                    options={countries}
                    getOptionLabel={(option) => option.country}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            </div>
            )
        }
}
export default Graph;
