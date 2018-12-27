import React from "react";
import Header from "./Header";
import Search from "./Search";
import Grid from "./Grid";
import GridCell from "./GridCell";
import { Wrap } from "./styles";
import tools from "./_data.js";

export default class Toolbox extends React.Component {
  state = {
    search: ""
  };
  handleSearch = e => this.setState({ search: e.target.value });
  render() {
    const { search } = this.state;
    const handlers = {
      handleSearch: this.handleSearch
    };
    return (
      <Wrap>
        <Header {...this.props} />
        <Search {...this.state} {...handlers} />
        <Grid
          data={tools}
          DataComponent={<GridCell />}
          perPage={9}
          searchTerm={search}
        />
      </Wrap>
    );
  }
}
