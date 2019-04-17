
import React, { Component } from 'react'

export default class AddForm extends Component {

    state={
       item: {
           content: ""
       }
    }

    handleChange = (e) =>
    {
        this.setState({
            item:{
                content: e.target.value 
            }
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.additem(this.state.item);
        this.setState({
            item:{
                content: ""
            }
        });
    }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
            <label className="center red-text">Add Todo's: </label>
           <div >
               
           <input className="input" type="text" onChange={this.handleChange} value={this.state.item.content} />
              
           </div>
            </form>    
      </div>
    )
  }
}
