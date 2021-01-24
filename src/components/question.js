import react from 'react';
import Button from 'react-bootstrap/Button';
import "../quiz.css";
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

            <div class="form-question" style={{minWidth:'300px'}}>
                <h4>{this.props.question}</h4>

                        {(this.state.answered) ? <Button style={{marginBottom:'10px'}} disabled>True</Button> : <Button style={{marginBottom:'10px'}}  onClick={() => this.handleClick(true)} >True</Button>}
                        {(this.state.answered) ? <Button style={{marginBottom:'10px'}} disabled>False</Button> : <Button style={{marginBottom:'10px'}} onClick={() => this.handleClick(false)} >False</Button>}
                
                
               
            </div>
        )
    }
}
export default Question;
