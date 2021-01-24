import react from 'react'
import NavigationBar from './NavigationBar'
import Image from 'react-bootstrap/Image'

class Quiz extends react.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                //HTML GOES HERE
            <div>
                <NavigationBar></NavigationBar>
                <div align="center" class="col-md-6 mx-auto">
                    <h1>quizzie yey</h1>
                    
                </div>
            </div>
        )
    }
}
export default Quiz;