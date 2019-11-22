import React, { Component } from "react";
import "./SearchBox.css";
import { withRouter } from "react-router-dom";

import Api from "../../Api.js";
let api = new Api();

class SearchBox extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      classList: "SearchBox",
      search: ""
    };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  updateValue = evt => {
    this.setState({
      search: evt.target.value
    });
  };

  submitSearch = () => {
    let user = this.state.search;
    console.log(user);
    api.searchUsers(user).then(res => {
      console.log(res.data);
      this.goToSearchPage(res.data);
    });
  };

  goToSearchPage = data => {
    this.props.history.push({
      pathname: `/search`,
      state: { data: data }
    });
  };

  render() {
    return (
      <div className={this.state.classList}>
        <input
          onChange={this.updateValue}
          type="text"
          value={this.state.search}
          className="search-input"
        ></input>
        <button className="search-button" onClick={this.submitSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default withRouter(SearchBox);
