import React from "react";

import Icon from "./SpriteIcon";

const Pagination = ({ forward, backward, classes }) => (
  <div className="stage-pagination">
    <div className={classes("top")} onClick={backward}>
      <Icon
        className={"toggle__chevron toggle__chevron--top"}
        icon={"chevron-up"}
      />
    </div>
    <div className={classes("bottom")} onClick={forward}>
      <Icon className={"toggle__chevron"} icon={"chevron-up"} />
    </div>
  </div>
);

export default Pagination;
