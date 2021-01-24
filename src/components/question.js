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

            <div class="form">
                <h4>{this.props.question}</h4>
                <table class='col-md-3 mx-auto'>
                    <tr>
                        <td>{(this.state.answered) ? <Button disabled>True</Button> : <Button onClick={() => this.handleClick(true)} >True</Button>}</td>
                        <td>{(this.state.answered) ? <Button disabled>False</Button> : <Button onClick={() => this.handleClick(false)} >False</Button>}</td>
                    </tr>
                </table>
                
                
                
                
            </div>
        )
    }
}
export default Question;
