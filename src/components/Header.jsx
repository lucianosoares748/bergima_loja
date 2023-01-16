import React from "react";
import Logo from "../assets/logo.png";
import banner from "../assets/bannerOne.png";
import { RxPerson, RxMagnifyingGlass } from "react-icons/Rx";
import { AiOutlineShoppingCart } from "react-icons/Ai";

import "../css/header.css";

export const Header = () => {
  return (
    <>
      <div className="mic">
        <p>Frete Gratis</p>
      </div>
      <div className="container">
        <div className="logo ">
          <img src={Logo} alt="" />
        </div>
        <div className="menu">
          <ul className="options">
            <li>Produtos</li>
            <li>Avaliações</li>
            <li>Blog</li>
            <li>Sobre a Bergima</li>
            <li>Onde nos encontrar?</li>
          </ul>
        </div>
        <div className="person">
          <RxPerson className="login" />
          <RxMagnifyingGlass className="search" />
          <AiOutlineShoppingCart className="shop" />
        </div>
      </div>
      <div className="home">
        <img className="banner" src={banner} alt="banner da loja" />
      </div>
    </>
  );
};

export default Header;
