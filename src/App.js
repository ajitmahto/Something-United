import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox.js';
import {robots} from './robots';
import './App.css';
import Scroll from './Scroll';

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            robots : robots,
            searchfield : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield : event.target.value })
    }

    
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
          return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
              <h1 className='f1'>Manchester United</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
              <CardList robots={filteredRobots} />
              </Scroll>
                
            </div>
        )
      }
    }

export default App;