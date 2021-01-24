import react from 'react'
import Button from 'react-bootstrap/Button'

class Form extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            origin:"",
            destination:"",
            button_disabled:false
        }
        
    }
    
    Button = () => {
        if (this.state.button_disabled) {
            return <Button disabled type="submit" className="Button" style={{marginTop:'50px', width:'100%', height:'50px'}}>Working...</Button>
        }
        return <Button type="submit" className="Button" style={{marginTop:'50px', width:'100%', height:'50px'}}>Get Emissions</Button>
    }
    render() {
        return (
            <div className="form">
                <input className="input" onChange={(text) => this.setState({origin:text.target.value})} placeholder="Origin"></input>
                <input className="input" onChange={(text) => this.setState({destination:text.target.value})} placeholder="Destination"></input>
                {this.Button()}
            </div>
        )
    }
}
export default Form;