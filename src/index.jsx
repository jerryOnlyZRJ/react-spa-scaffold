import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/styles/index.css'

class App extends React.Component {
  render() {
    return <div>Hello React!</div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
