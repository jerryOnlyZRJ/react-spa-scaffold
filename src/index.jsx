import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/styles/index.css'

class App extends React.Component {
  render() {
    return <h1>Hello React!</h1>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
