import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "@material-ui/core";

function TopHeader() {
  return (
    <>
      <nav>
        <div className="topHeader">
          <div className="leftTopHeader">
            <ul className="list">
              <div>
                <li>
                  <Link className="fb" to="/">
                    <FacebookIcon />
                  </Link>
                </li>
                <li>
                  <Link className="ig" to="/">
                    <InstagramIcon />
                  </Link>
                </li>
                <li>
                  <Link className="tw" to="/">
                    <TwitterIcon />{" "}
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="rightTopHeader">
            <Button className="loginBtn" variant="outlined" color="primary">
              Site Login
            </Button>
            <Button className="loginBtn" variant="outlined" color="primary">
              App Login
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopHeader;
