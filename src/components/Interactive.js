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
                <div class="parent">
                    <div class="graph-container">
                        <Graph />
                    </div>
                    <div class="text-container">
                        <h2 className="text">The data on this chart represents the amount of Co2 emission each country has had per year since 1998.</h2>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Interactive;