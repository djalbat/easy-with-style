"use strict";

import withStyle from "../../index";  ///

const ColumnsDiv = (properties) => {
  const { className, childElements } = properties;

  return (

    <div className={`${className} columns`}>
      {childElements}
    </div>

  );
};

export default withStyle(ColumnsDiv)`

  display: flex;
  flex-grow: 1;
  flex-direction: row;

`;
