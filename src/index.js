import React from "react"
import ReactDOM from "react-dom"
import SeasonDisplay from "./SeasonDisplay"
import Spinner from "./Spinner"

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

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please Accept Location Request" />
  }

  // render() function is Required by React
  render() {
    return <div className="border red">{this.renderContent()}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
