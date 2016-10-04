import React from "react";


export default class SearchField extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  render(){
    return (
      <div> You searched for: 
      {this.state.searchTerm}
      <form onSubmit={ e => {
        e.preventDefault()
        this.setState({
          searchTerm: this.refs.myInputField.value
        })
        this.props.loadRecipe(this.refs.myInputField.value)
        // console.log(e.target.value)
      }}>
        <input ref="myInputField" placeholder="enter a recipe" />
      </form>
         {this.props.name}
      </div>
    )
  }
}
