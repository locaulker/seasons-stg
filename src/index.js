import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"

// Class component
class App extends React.Component {
  // Initializing state
  state = { lat: null, errorMessage: "" }

  // Lifecycle method
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  // render() function is Required by React
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <div>Loading!</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
