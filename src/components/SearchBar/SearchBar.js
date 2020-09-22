import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
          }
        this.handleTermChange = this.handleTermChange.bind(this)
        this.handleLocationChange = this.handleLocationChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    // ***** style filter's color ***** //
    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) {
            return 'active'
        } else {
            return ''
        }
    }

    // ***** Handle filter list change ***** //
    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    // ***** Handle Term change ***** //
    handleTermChange(event) {
        // console.log(event.target.value)
        this.setState({
            term: event.target.value
        })
    }

    // ***** Handle Location change ***** //
    handleLocationChange(event) {
        // console.log(event.target.value)
        this.setState({
            location: event.target.value
        })
    }

    // ***** Handle searchYelp ***** //
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy)
        event.preventDefault()
    }


    // ***** List of search filters ***** //
    renderSortByOptions() {
        // Object.key(myObject) return an array with objects's keys
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption] 
            return <li key={sortByOptionValue} 
                        className={this.getSortByClass(sortByOptionValue)} 
                        onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                        >{sortByOption}</li>
        }) 
    }

    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                    {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <button onClick={this.handleSearch}>Let's Go</button>
                </div>
            </div>
        )
    }
}

export default SearchBar;