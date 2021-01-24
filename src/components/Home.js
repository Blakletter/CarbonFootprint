import react from 'react'
import NavigationBar from './NavigationBar'
class Home extends react.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                //HTML GOES HERE
            <div>
                <NavigationBar></NavigationBar>
                
            </div>
        )
    }
}
export default Home;