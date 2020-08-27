import React from 'react';
import Loading from '../loading';
import SingleSearchResult from './single_search_result';


class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { query: '', resultsLoading: true }
    this.baseState = { ...this.state }
    this.getSearchResults = this.getSearchResults.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    e.preventDefault();
    this.setState({ query: e.currentTarget.value }, () => this.getSearchResults());
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      if (this.props.search.length >= 1) {
        this.setState({ resultsLoading: false });
      }
    }
    if (this.props.match != prevProps.match) {
      this.setState(this.baseState);
    }
  }

  getSearchResults() {
    if (this.state.query.length >= 2) {
      this.props.fetchStockSearchResults(this.state.query.toUpperCase());
    }
  }

  render() {
    // if (this.state.query.length >= 2 && (this.props.loading || this.props.search.length === 0)) {
    //   return (<Loading loading={this.props.loading} compName={"search-results"} />)
    // }
    let searchResults;
    let listClassName;
    if (this.state.query.length >= 2) {
      if (this.state.resultsLoading) {
        searchResults = <li><Loading loading={this.props.loading} compName={"search-results"} /></li>
        listClassName = 'loading';
      } else {
        searchResults = this.props.search.map(result => (<SingleSearchResult symbol={result.symbol} name={result.name} />))
        listClassName = 'results';
      }
    }
    // return (<div className="search-bar-contiainer">SearchBarPlaceHolder</div>)
    return (
      <div className="search-bar-container">
        <div className="search-bar">
          <img className="search-bar-icon" src="/assets/search_icon-2a50cd33dfb651650091f7349579aee373bc8bc348aadb89a3356acfe15541f5.png"></img>
          <input type="text"
          className="search-bar-input"
          placeholder="Search"
          value={this.state.query}
          onChange={this.handleInput}
          /></div>
        <ul className={`search-results ${listClassName}`}>
          {searchResults}
        </ul>
      </div>
    )
  }
}

export default SearchBar;