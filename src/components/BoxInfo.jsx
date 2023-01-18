import React from "react";
import { BsTruck, BsClock, BsCreditCard } from "react-icons/Bs";
import { CiPercent } from "react-icons/Ci";

export const BoxInfo = () => {
  return (
    <div className="grid my-3 grid-cols-4 w-full h-auto">
      <div className="flex w-auto h-auto justify-center">
        <BsTruck className="w-9 mr-3 h-9" />
        <p className="uppercase italic font-inter font-bold">
          Frete grátis <br />
          <span className="lowercase not-italic font-normal">
            acima de $100
          </span>
        </p>
      </div>
      <div className="flex w-auto h-auto justify-center mx-auto">
        <BsCreditCard className="flex mr-3 w-9 h-9" />
        <p className="uppercase italic font-inter font-bold">
          Parcelamos em até
          <br />
          <span className="lowercase not-italic font-normal">5X sem juros</span>
        </p>
      </div>
      <div className="flex w-auto h-auto justify-center mx-auto">
        <BsClock className="flex mr-3 w-8 h-8" />
        <p className="uppercase italic font-inter font-bold">
          Atendimento
          <br />
          <span className="lowercase not-italic font-normal">24Horas</span>
        </p>
      </div>
      <div className="flex w-auto h-auto justify-center mx-auto">
        <CiPercent className="flex mr-3 w-9 h-9" />
        <p className="uppercase italic font-inter font-bold">
          Aproveite os descontos <br />
          <span className="lowercase not-italic font-normal">
            Toda a loja em 10%
          </span>
        </p>
      </div>
    </div>
  );
};

export default BoxInfo;
