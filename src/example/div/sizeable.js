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
  
  width: 48rem;
  display: flex;
  min-width: 24rem;
  flex-direction: column;

`;
