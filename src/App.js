import React from 'react';
import './App.css';
import restaurants from './Restaurants';
import Menu from './Menu';
import RestaurantByType from './RestaurantByType';
import Type from './Type'

//const restArray = restaurants.map((rest) => {restArray.push(rest)});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      restaurants: restaurants.props
    }
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <Type types={Object.keys
          (this.state.restaurants)}/>
          <select
            onChange={this._filterType}
          >
          <option value="american">American</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="mexican">Mexican</option>
          </select>
          <RestaurantByType onClick={this._handleCliic}
          type={this.state.type} allRestaurants=
          {this.state.type}/>
          <Menu restaurant={this.state.restaurant} type=
          {this.state.type} allRestaurants=
          {this.state.restaurants}/>
        </header>
      </div>
    );
  }
  _filterType = (e) => {
    this.setState({
      type: e.target.value,
      restaurant: ''
    })
  }
  _handleCliick = (e) => {
    this.setState({
      restaurant: e.target.textContent
    })
  }
}

export default App;