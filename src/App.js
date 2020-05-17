import React from 'react';
import './App.css';
import { CardsList } from './components/cards-list/card-list.components';
import { Search } from './components/search/search.component';

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
        monsters: [],
        searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onchange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search placeholder="Search monsters" onChange={this.onchange}/>
        <CardsList monsters={ filteredMonsters } />
    </div>
    )
  }

  /*
  render() {
    return (
      <div className="App">  
        <CardList >
          {this.state.monsters.map(obj => <h1 key={obj.id}>{obj.name}</h1>)}
        </CardList>
    </div>
    )
  }*/
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
