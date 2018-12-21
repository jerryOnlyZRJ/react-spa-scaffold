import React from 'react'
import ReactDOM from 'react-dom'
import '@/assets/styles/index.css'
import Header from '@/components/Header/Header.jsx'

class App extends React.Component {
  render () {
    return <div>
      <Header />
       Hello React!
    </div>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
