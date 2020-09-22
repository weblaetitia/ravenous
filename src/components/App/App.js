import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import Yelp from '../../util/Yelp'

import './App.css';




export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this)
  }
  

  searchYelp(term, location, sortBy) {
    if (term && location && sortBy) {
      // console.log(`Searching Yelp with ${term}, ${location}, by ${sortBy}`)
      Yelp.search(term, location, sortBy).then(businesses => {
        this.setState({
          businesses: businesses
        })
      })
    }
  }
  render() {
    console.log(this.state.businesses)
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={this.state.businesses} />
      </div>
    );
  }
}
