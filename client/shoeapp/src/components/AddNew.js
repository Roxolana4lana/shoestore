import React, { Component } from 'react'
import axios from 'axios'

export default class AddNew extends Component {
    state={
        type:'',
        color:'',
        for:'',
        url:'',
        size:[],
        qty:''
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        const obj = {
            type:this.state.type,
            color:this.state.color,
            for: this.state.for,
            url:this.state.url,
            size: this.state.size,
            qty: this.state.qty

        }
        axios.post(`http://localhost:3001/api/shoes`, obj)
            .then(res =>
                console.log(res.data)
            )
            .catch((err) => {
                console.log(err)
            })
        this.setState({
            type: '',
            color: ''
        })
    }
  render() {
    return (
      <div>
            <form onSubmit={this.handleSubmit} className='addForm'>
                <div className='ElementForm'>
                    <label> The color </label>
                    <input
                        type='text'
                        value={this.state.color}
                        onChange={this.handleChange}
                        name='color'
                        className='title' />
                </div>
                <div className='ElementForm'>
                    <label> The type </label>
                    <input
                        type='text'
                        value={this.state.type}
                        onChange={this.handleChange}
                        name='type'
                        className='title' />
                </div>
                <div className='ElementForm'>
                    <label> Man/woman </label>
                    <input
                        type='text'
                        value={this.state.for}
                        onChange={this.handleChange}
                        name='for'
                        className='title' />
                </div>
                <div className='ElementForm'>
                    <label> The url </label>
                    <input
                        type='text'
                        value={this.state.url}
                        onChange={this.handleChange}
                        name='url'
                        className='title' />
                </div>
                <div className='ElementForm'>
                    <label> The size </label>
                    <input
                        type='text'
                        value={this.state.size}
                        onChange={this.handleChange}
                        name='size'
                        className='title' />
                </div>
                <div className='ElementForm'>
                    <label> The qty </label>
                    <input
                        type='text'
                        value={this.state.qty}
                        onChange={this.handleChange}
                        name='qty'
                        className='title' />
                </div>

                <button>Add</button>
                </form>
      </div>
    )
  }
}
