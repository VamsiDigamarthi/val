
import {Component} from 'react'

import './App.css';

class App extends Component {

  state = {
    name: '',
    email : '',
    vv : []
  }
  
  onChangeUsername = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({email: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {name, email} = this.state
    
    const userDetails = {name, email}
    console.log(userDetails)
    const options = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userDetails)
    }
    const response = await fetch('https://vamsi-first.herokuapp.com/add', options)
    const data = await response.json()
    console.log(data)
    this.valueAny()

  }

  valueAny = async () => {
    const options = {
      methos: "GET"
    }
    const response = await fetch('https://vamsi-first.herokuapp.com',options)
    const data = await response.json()
    console.log(data)
    console.log("apis")
    this.setState({vv : data})
  }

  componentDidMount() {
    this.valueAny()
    console.log("compo")
 }

  
  render() {
    const {vv} = this.state
    console.log(vv)
    return(
      <>
      <form className = "form-card" onSubmit={this.submitForm}>
            <input className = "value" onChange={this.onChangeUsername} placeholder='name' type = "text" />
            <input className = "value" onChange={this.onChangePassword} placeholder='email' type = "text" />
            <button type = "submit">Submit</button>
        </form>
        <div >
          {vv.map(each => (
             <li className = "li-cards" key = {each._id}>
              <p className = "para">{each.name}</p>
              <p>{each.email}</p>
             </li>
          ))}
        </div>
        </>
    )
  }

}


export default App;
