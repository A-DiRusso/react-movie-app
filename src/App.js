import React, { Component } from 'react';
import './App.css';
import restaurants from './Restaurants';
import CuisineList from './CuisineList';
import RestaurantList from './RestaurantList';
import MenuList from './MenuList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisine: '',
      restaurants: ''
    }
    
  }
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <CuisineList 
            cuisine={Object.keys(restaurants)}
            handleClick={this._setRestaurant}
          />
          {
            this.state.cuisine ? <RestaurantList 
                                        restaurants={Object.keys(restaurants[this.state.cuisine])}
                                        handleClick={this._setMenu}
                                      />
                                      : null
          }
          {
            this.state.restaurants ? <MenuList 
                                        food={restaurants[this.state.cuisine][this.state.restaurants]}
                                      />
                                      : null
          } 
          </header>
        </div>
    )
  }
  _setRestaurant = (cuisine) => {
    this.setState({
      cuisine,
      restaurants: ''
    })
  }
  _setMenu = (restaurants) => {
    this.setState({
      restaurants
    })
  }
}


export default App;