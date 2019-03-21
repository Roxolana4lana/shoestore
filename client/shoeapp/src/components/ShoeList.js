import React, { Component } from 'react'
import axios from 'axios'

export default class ShoeList extends Component {
    constructor(){
        super()
        this.state={
            shoes:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/api/shoes')
        .then(res=>this.setState({
            shoes:res.data
        }))
        .catch(err=>console.log(err))
    }
  render() {
    return (
      <div>
        {this.state.shoes? this.state.shoes.map(shoe=>(
            <ul>
            <li>{shoe.color}</li>
                    <li>{shoe.for}</li>
                    <li>{shoe.type}</li>
                    <img src={shoe.url} alt="name" style={{ height: '27rem' }} />
            </ul>
            )) : 'not yet'}
      </div>
    )
  }
}
