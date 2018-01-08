import React from 'react'

export default class CoordinatesButton extends React.Component {

  handleClick = (event) => {
   const arr = [event.clientX, event.clientY]
   debugger
   return this.props.onReceiveCoordinates(arr)

  }

  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}
