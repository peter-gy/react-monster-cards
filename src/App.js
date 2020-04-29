import React from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

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
        <CardList monsters={this.state.monsters}/>
      </div>
    )
  }

}

export default App;
