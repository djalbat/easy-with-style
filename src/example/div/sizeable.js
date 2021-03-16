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

  display: flex;
  
  width: 48rem;
  min-width: 24rem;
  padding-left: 1rem;
  padding-right: 1rem;
  flex-direction: column;

`;
