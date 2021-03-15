import React from "react"
import ReactDOM from "react-dom"

// Class component
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    // We define the initial state of our component
    this.state = { lat: null }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // We call setState to update our state
        this.setState({ lat: position.coords.latitude })
      },
      (err) => console.log(err)
    )
  }

  // Required by React
  render() {
    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))
