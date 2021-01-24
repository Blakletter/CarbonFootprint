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
                <Graph />
            </div>
        )
    }
}
export default Interactive;