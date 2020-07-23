import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list-compont'
import {Searchbox} from './components/search-box/search-box.components'

class App extends Component{

  constructor(){
    super();

    this.state ={
     monsters:[],
     search:''
    }

    //this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch = (e) => {
    this.setState({search: e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users=> this.setState({monsters:users}));
  }
  render(){
    const { monsters,search } = this.state;
    const filteredMonsters = 
    monsters.filter(monster =>
       monster.name.toLowerCase().includes(search.toLowerCase())
      );
    return(
      <div className='App'>
        <h1>Smelly Cat</h1>
       <Searchbox
        placeholder=' search cats'
        handlechange = {this.handleSearch}
       />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
