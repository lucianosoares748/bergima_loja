import React from "react";
import Logo from "../assets/logo.png";
import banner from "../assets/bannerOne.png";
import { RxPerson, RxMagnifyingGlass } from "react-icons/Rx";
import { AiOutlineShoppingCart } from "react-icons/Ai";

export const Header = () => {
  return (
    <>
      <div className="flex font-inter font-normal text-xs mx-auto m-full p-1 container justify-center">
        <p>📣FRETE GRÁTIS EM COMPRAS ACIMA DE R$100📣</p>
      </div>
      <div className="bg-black">
        <div className="container p-4 flex mx-auto">
          <div className="flex w-[330px] ">
            <img className="" src={Logo} alt="logo Bergima" />
          </div>
          <div className="flex w-screen">
            <ul className="flex font-inter uppercase text-sm font-normal m-auto w-full justify-center gap-6 text-white">
              <li>
                <a href="">Produtos</a>
              </li>
              <li>
                <a href="">Avaliações</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Sobre a Bergima</a>
              </li>
              <li>
                <a href="">Suporte</a>
              </li>
            </ul>
          </div>
          <div className="flex w-auto h-auto gap-3 text-white">
            <RxPerson className="w-[32px] h-[66px]" />
            <RxMagnifyingGlass className="w-[32px] h-[66px]" />
            <AiOutlineShoppingCart className="w-[32px] h-[66px]" />
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="banner da loja" />
      </div>
    </>
  );
};

export default Header;
