import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import '@/assets/styles/index.css'
import Header from '@/components/Header/Header.jsx'

class App extends React.Component {
    static defaultProps = {
        user: 'user'
    }
    static propTypes = {
        comment: PropTypes.string
    }
    render () {
        return <div>
            <Header />
            Hello {this.props.user}!
        </div>
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
