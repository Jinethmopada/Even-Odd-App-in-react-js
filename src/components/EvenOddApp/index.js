import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(() => ({
      count: Math.ceil(Math.random() * 100),
    }))
  }

  checkOdd = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const value = this.checkOdd()
    return (
      <div className="card">
        <h1 className="count">Count {count}</h1>
        <p className="para">Count is {value}</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
