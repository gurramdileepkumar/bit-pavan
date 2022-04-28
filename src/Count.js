import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Count extends Component {
    increment=()=>{
        this.props.dispatch({type:"INCREMENT"});
    }
    decrement=()=>{
        this.props.dispatch({type:"DECREMENT"});
    }
  render() {
    return (
      <div>
          <h1>This is count Component {this.props.count}</h1>
          <button onClick={this.increment}>Increment</button> 
          <button onClick={this.decrement}>Decrement</button>
        
      </div>
    )
  }
}

const mapStateToProps = state=>({
    count:state.count
})
export default connect(mapStateToProps)(Count);
