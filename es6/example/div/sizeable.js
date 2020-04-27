"use strict";

import withStyle from "../../index";  ///

const SizeableDiv = (properties) => {
  const { className, childElements } = properties;

  return (

    <div className={`${className} sizeable`}>
      {childElements}
    </div>

  );
};

export default withStyle(SizeableDiv)`

  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;

`;
