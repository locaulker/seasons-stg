import React from "react"
import ReactDOM from "react-dom"

// Class component
class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props)

    this.state = { lat: null }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude
        })
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
