import React from "react";
import { Link } from "react-router-dom";
import "./PageInfo.module.css";

const PageInfo = (props) => {
  const {title, description,url} = props;
  return (
    <>
      <div className="p-5  my-5 bg-light rounded-3">
        <div className="container-fluid py-5  text-center">
          <h1 className="display-5 fw-bold text-uppercase">{title}</h1>
          <div className="container-xxl">
            <p className=" fs-4">{description  ? description :''}
              
            </p>
            {url  ? (<Link to={url} className="btn btn-warning btn-lg" type="button">
              Sign Up
            </Link>) :''}
            
          </div>
        </div>
      </div>
    </>
  );
};

export default PageInfo;
