const {
    configure,
    shallow,
    mount,
    render
} = require('enzyme')
const React = require('react')
const Adapter = require('enzyme-adapter-react-16')

const Header = require('../src/components/Header/Header.jsx').default
configure({
    adapter: new Adapter()
})

describe('Enzyme Header', function () {
    it('Header\'s content should be Header', () => {
        let header = shallow( < Header / > )
        expect(header.text()).toBe('Header')
    })
})
