import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";
import { UserContext } from "../../contexts/UserContext";
import "./navigation.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <Link className="nav-link" to="/auth">
              Sign out
            </Link>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
