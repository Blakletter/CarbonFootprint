import react from 'react'
import Button from 'react-bootstrap/Button'
class Question extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            answered:false,
            correct:this.props.correct
        }
    }

    handleClick = (prop) => {
        if (prop===this.state.correct) {
            alert("You got it right!")
        } else {
            alert("You got it wrong :(")
        }
        this.setState({answered:true})
    }
    
    render() {
        
        return (

            <div >
                <h4>{this.props.question}</h4>
                {(this.state.answered) ? <Button disabled>Disabled</Button> : <Button onClick={() => this.handleClick(true)} >True</Button>}
                {(this.state.answered) ? <Button disabled>Disabled</Button> : <Button onClick={() => this.handleClick(false)} >False</Button>}
            </div>
        )
    }
}
export default Question;
