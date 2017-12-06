import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render() {
    return (
      <div className="search-bar col-md-8">
        <input 
          placeholder="Telusuri"
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}
          onKeyDown={(event) => this.onInputChange(event)} />
      </div>
    );
  }

  onInputChange(event){
    if(event.keyCode === 13 && event.target.value !== ''){
      this.props.onSearchTermChange(this.state.term);
    }
  }
}

export default SearchBar;