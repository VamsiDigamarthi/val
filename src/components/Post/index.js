import {Component} from 'react'
import './index.css'

class Post extends Component {

    state = {
        name: '',
        email : ''
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
        const response = await fetch('http://localhost:4000/add', options)
        const data = await response.json()
        console.log(data)
      }

   render() {
    const {name} = this.state
    

    return (
        <form className = "form-card" onSubmit={this.submitForm}>
            <input value = {name} className = "value" onChange={this.onChangeUsername} placeholder='name' type = "text" />
            <input className = "value" onChange={this.onChangePassword} placeholder='email' type = "text" />
            <button type = "submit">Submit</button>
        </form>
    )
   }
}

export default Post