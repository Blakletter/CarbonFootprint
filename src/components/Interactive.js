import react from 'react'
import { Nav } from 'react-bootstrap'
import Graph from './Graph'
import NavigationBar from './NavigationBar'
class Interactive extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div style={{display:'flex', flexDirection:'row', width:'100%', alignItems:'center'}}>
                    <div style={{width:'40%'}}>
                        <Graph />
                    </div>
                    <h2 className="text">The data on this chart represents the amount of Co2 emission each country has had per year since 1998.</h2>
                </div>
                
            </div>
        )
    }
}
export default Interactive;