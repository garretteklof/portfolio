import React from "react";
import Header from "./Header";
import Search from "./Search";
import Grid from "./Grid";
import GridCell from "./GridCell";
import Legend from "./Legend";
import { Wrap } from "./styles";
import tools from "./_data.js";

export default class Toolbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      toolsPerPage: this.calculatePerPage()
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillMount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = e => {
    this.setState({ toolsPerPage: this.calculatePerPage() });
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

  calculatePerPage = () => {
    const width = window.innerWidth;
    if (width > 750) return 9;
    if (width < 750 && width > 480) return 6;
    if (width <= 480) return 3;
  };

  render() {
    const { search, toolsPerPage } = this.state;
    const handlers = {
      handleSearch: this.handleSearch
    };
    console.log(toolsPerPage);

    return (
      <Wrap>
        <Header {...this.props} />
        <Search {...this.state} {...handlers} />
        <Grid
          data={tools.sort(this.sortTools)}
          DataComponent={<GridCell />}
          perPage={toolsPerPage}
          searchTerm={search}
        />
        <Legend />
      </Wrap>
    );
  }
}
