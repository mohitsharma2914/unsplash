import React from "react";
import unsplash from "./api/unsplash";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async (searchText) => {
    let res = await unsplash.get("search/photos", {
      params: {
        query: searchText,
      },
    });

    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: 20 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
