import React from 'react';

class App extends React.Component{
    
    state = {
        people: []
    }
    componentDidMount(){
        let url = "http://api.open-notify.org/astros.json"
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                people: data.people
            })
        })
    }

    render(){
        return(
            <div>
            <ul>
            {this.state.people.map(person => person.name)}
            </ul>
            </div>
        )
    }
}

export default App