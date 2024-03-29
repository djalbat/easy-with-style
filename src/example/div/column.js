"use strict";

import withStyle from "../../index";  ///

const ColumnDiv = (properties) => {
  const { className, childElements } = properties;

  return (

    <div className={`${className} column`}>
      {childElements}
    </div>

  );
};

export default withStyle(ColumnDiv)`

  display: flex;
  flex-grow: 1;

`;
