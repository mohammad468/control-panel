import React, { useEffect, useState } from "react";
import { FaBeer } from "react-icons/fa";
import "./Company.scss";

const Company = () => {
  const [changeClass, setChangeClass] = useState(false);

  const myHandler = () => {
    setChangeClass(true);
    console.log("trued");
  };

  // useEffect(() => {
  //   setChangeClass(false);
  //   console.log("falsed");
  // }, [changeClass]);

  return (
    <>
      <div
        className={
          changeClass
            ? "p-2 border-top company-list-single-active"
            : "p-2 border-top company-list-single"
        }
        onClick={myHandler}
      >
        <FaBeer />
        <span className="me-2">شرکتها</span>
      </div>
    </>
  );
};
export default Company;
