import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import pic from "../assets/cornerpic.png";

const Service = ({
  id,
  header,
  image,
  image_sm,
  subheader,
  texts,
  tag,
  next_link,
  next_header,
  end,
}) => {
  const justify = end ? " justify-end" : " justify-start";
  const classNames = "hidden md:flex rounded-2xl p-4 w-full flex bg-cover " + image + justify;

  return (
    <article id={id} className="p-default my-4 relative serviceCard">
      <img
        className="rounded-2xl mx-auto md:hidden"
        src={image_sm}
        alt={header}
      ></img>
      <div className="bg-th-grey md:bg-white rounded-2xl py-6 px-4 md:hidden max-w-[390px] mx-auto">
        <h1 className="text-th-primary">{tag}/6</h1>
        <h2 className="text-th-primary mt-2">{header}</h2>
        <div className="w-full h-[1px] border-b border-b-th-primary my-4 md:hidden"></div>
        <p className="text-th-primary md:text-base">{subheader}</p>
        {texts.map((text) => (
          <p className="mt-2">{text}</p>
        ))}
        <div className="hidden md:block mt-auto">
          <div className="w-full h-[1px] border-b border-b-th-primary my-4 md:hidden"></div>
          <div className="flex items-start justify-between">
            <AnchorLink href={next_link} className="text-th-primary">
              Next
            </AnchorLink>
            <div className="flex items-stretch mt-4">
              <div className="h-10 w-[1px] border-l border-l-th-primary mr-4"></div>
              <AnchorLink href={next_link} className="text-th-primary">
                {next_header}
              </AnchorLink>
              <img src={pic} alt={header} className="w-8 h-8"></img>
            </div>
          </div>
        </div>
      </div>
      <div className={classNames}>
        <div className="bg-white rounded-2xl py-6 px-4 max-w-md">
          <h1 className="text-th-primary">{tag}/6</h1>
          <h2 className="text-th-primary mt-4">{header}</h2>
          <div className="w-full h-[1px] border-b border-b-th-primary my-4 md:hidden"></div>
          <p className="text-th-primary md:text-base mt-4">{subheader}</p>
          {texts.map((text) => (
            <p className="mt-2">{text}</p>
          ))}
          <div className="hidden md:block mt-auto">
            <div className="w-full h-[1px] border-b border-b-th-primary my-4 md:hidden"></div>
            <div className="flex items-start justify-between mt-4">
              <AnchorLink href={next_link} className="text-th-primary">
                Next
              </AnchorLink>
              <div className="flex items-stretch">
                <div className="h-10 w-[1px] border-l border-l-th-primary mx-4"></div>
                <AnchorLink href={next_link} className="text-th-primary max-w-[240px]">
                  {next_header}
                </AnchorLink>
              </div>
              <AnchorLink href={next_link}>
                <img src={pic} alt={header} className="w-8 h-8"></img>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Service;
