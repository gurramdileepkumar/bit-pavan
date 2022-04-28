import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Count1 extends Component {
  render() {
    return (
      <div>
        <h1>this is count1 Component {this.props.count}</h1>
      </div>
    )
  }
}

const mapStateToProps=state => ({
    count: state.count
})

export default connect(mapStateToProps)(Count1);