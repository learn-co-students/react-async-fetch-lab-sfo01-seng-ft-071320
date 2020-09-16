// create your App component here
import React, {Component} from 'react';

export default class App extends Component {

    render() {
        return 
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => console.log(data))
    }
}