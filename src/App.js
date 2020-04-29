import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      monsters: [
        {
          id: 1,
          name: 'A'
        },
        {
          id: 2,
          name: 'B'
        },
        {
          id: 3,
          name: 'C'
        },
        {
          id: 4,
          name: 'D'
        }
      ]
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => <h1 key={monster.id}>Monster {monster.name}</h1>)}
      </div>
    )
  }

}

export default App;
