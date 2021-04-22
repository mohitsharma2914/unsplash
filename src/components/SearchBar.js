import React from "react";
import "./search-style.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  onSearchSubmit = (e) => {
    e.preventDefault();
    // console.log("Search Text : ", this.state.searchText);
    this.props.onSubmit(this.state.searchText);
    console.log("submitted");
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onSearchSubmit}>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => this.setState({ searchText: e.target.value })}
            />
            <i
              className="circular search link icon"
              onClick={this.onSearchSubmit}
            ></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
