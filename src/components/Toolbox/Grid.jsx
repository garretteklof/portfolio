import React from "react";
import { DataGrid, NoData, PagWrap, PagArrow } from "./styles";

export default class Grid extends React.Component {
  constructor(props) {
    super(props);
    const numData = props.data.length;
    const totalPages = numData ? Math.ceil(numData / props.perPage) : 1;
    this.state = {
      data: props.data,
      perPage: props.perPage,
      page: 1,
      totalPages
    };
  }

  componentDidUpdate(prevProps) {
    const { searchTerm, perPage } = this.props;
    if (searchTerm !== prevProps.searchTerm) {
      this.searchData();
    }
    if (perPage !== prevProps.perPage) {
      this.setState({ perPage });
    }
  }

  paginatePage = direction => {
    const operand = direction === "forward" ? 1 : -1;
    const page = this.state.page + operand;
    this.setState({ page }, () => {
      if (this.state.page < 1) return this.setState({ page: 1 });
      if (this.state.page > this.state.totalPages)
        return this.setState({ page: totalPages });
    });
  };

  divideRows = () => {
    const { page, perPage, data } = this.state;
    if (!data.length) return [];
    const indexOfLast = page * perPage;
    const indexOfFirst = indexOfLast - perPage;
    return data.length > perPage ? data.slice(indexOfFirst, indexOfLast) : data;
  };

  hidePaginateForward = () => {
    const { perPage, page, data } = this.state;
    return this.divideRows().length < perPage || data.length === page * perPage;
  };

  searchData = () => {
    const { perPage } = this.state;
    const { data, searchTerm } = this.props;
    const filteredData = data.filter(cell => this.keepCell(cell, searchTerm));
    const totalPages = filteredData.length
      ? Math.ceil(filteredData.length / perPage)
      : 1;
    this.setState({
      data: filteredData,
      totalPages
    });
  };

  keepCell = (dataObj, search) => {
    for (const prop in dataObj) {
      if (
        typeof dataObj[prop] === "string" &&
        dataObj[prop].toLowerCase().includes(search.toLowerCase())
      ) {
        return true;
      } else if (
        Array.isArray(dataObj[prop]) &&
        dataObj[prop].filter(
          tag =>
            typeof tag === "string" &&
            tag.toLowerCase().includes(search.toLowerCase())
        ).length
      ) {
        return true;
      }
    }
  };

  render() {
    const { data, page } = this.state;
    const { DataComponent } = this.props;
    return (
      <>
        <DataGrid>
          {data.length ? (
            this.divideRows().map((elData, i) =>
              React.cloneElement(DataComponent, { ...elData, key: i })
            )
          ) : (
            <NoData>Couldn't find it in the toolbox.</NoData>
          )}
        </DataGrid>
        <PagWrap page={page} hidePaginateForward={this.hidePaginateForward}>
          <PagArrow
            className="toolbox-arrow-back"
            icon="arrow-back"
            onClick={() => this.paginatePage("backward")}
          />
          <PagArrow
            className="toolbox-arrow-forward"
            icon="arrow-forward"
            onClick={() => this.paginatePage("forward")}
          />
        </PagWrap>
      </>
    );
  }
}
