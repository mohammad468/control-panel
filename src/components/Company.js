import React from "react";
import { FaBeer } from "react-icons/fa";
import "./Company.scss";

const Company = () => {
  return (
    <>
      <div className="p-2 border-top company-list-single">
        <FaBeer />
        <span className="me-2">hi</span>
      </div>
    </>
  );
};

export default Company;
