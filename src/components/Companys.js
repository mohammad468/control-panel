import React, { useState } from "react";

// * components
import Company from "./Company";

const Companys = () => {
  const [active, setActive] = useState(false);
  console.log(active);

  const myHandler = () => {
    setActive(true);
    console.log("trued");
  };

  return (
    <React.Fragment>
      <Company onClick={myHandler} />
    </React.Fragment>
  );
};

export default Companys;
