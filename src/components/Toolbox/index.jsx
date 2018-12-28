import React from "react";
import Header from "./Header";
import Search from "./Search";
import Grid from "./Grid";
import GridCell from "./GridCell";
import Legend from "./Legend";
import { Wrap } from "./styles";
import tools from "./_data.js";

export default class Toolbox extends React.Component {
  state = {
    search: ""
  };
  handleSearch = e => this.setState({ search: e.target.value });
  sortTools = (a, b) => {
    const order = [
      "crackerjack",
      "well-versed",
      "versed",
      "currently learning",
      "moved on"
    ];
    return order.indexOf(a.rating) - order.indexOf(b.rating);
  };
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
          data={tools.sort(this.sortTools)}
          DataComponent={<GridCell />}
          perPage={9}
          searchTerm={search}
        />
        <Legend />
      </Wrap>
    );
  }
}
