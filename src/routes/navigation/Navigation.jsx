import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crwn.svg";
import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import {
  NavigationContainer,
  LogoContainer,
  NavigationLinksContainer,
  Navlink,
} from "./navigation-styled.jsx";
import { logout } from "../../utils/firebase/firebase";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { toggle } = useContext(CartContext);
  return (
    <>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavigationLinksContainer>
          <Navlink to={"/"}>Home</Navlink>
          <Navlink to={"/shop"}>Shop</Navlink>
          {currentUser ? (
            <Navlink as={"span"} onClick={logout}>Sign out</Navlink>
          ) : (
            <Navlink to="/auth">Sign in</Navlink>
          )}
          <CartIcon />
        </NavigationLinksContainer>
        {toggle && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
