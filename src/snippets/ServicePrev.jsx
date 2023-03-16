import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pic from "../assets/cornerpic.png";

const ServicePrev = ({ link, image, header }) => {
  return (
    <article className="flex flex-col max-w-[240px] servicePrev">
      <AnchorLink className="relative" href={link}>
        <img className="" src={image} alt={header}></img>
        <img
          className="absolute bottom-2 right-2 w-10 h-10"
          src={pic}
          alt=""
        ></img>
      </AnchorLink>
      <AnchorLink href={link}>
        <h3 className="my-2 md:my-4 text-th-primary">{header}</h3>
      </AnchorLink>
      <div className="w-full h-[1px] border-b border-b-th-primary mt-auto"></div>
    </article>
  );
};

export default ServicePrev;
