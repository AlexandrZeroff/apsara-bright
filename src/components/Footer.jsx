import React from "react";

const Footer = () => {
  return (
    <section id="footer">
      <div className="flex flex-col md:flex-row md:justify-between p-default my-8 md:my-16">
        <p className="text-base">© Copyright 2023</p>
        <div className="mt-4 md:mt-0">
          <p className="text-base">2724 Újlengyel, Határ út 12, Hungary</p>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-4">
          <a
            href="https://drive.google.com/file/d/1li92Lpbw-6EGSratUfdFxC7WeslIE8P9/view?usp=sharing"
            target="_blank"
            rel="nofollow"
          >
            Privacy Policy
          </a>
          <a
            href="https://drive.google.com/file/d/1MtS2c1rLp1eMNMzdV8zCq2W4LAVraEb3/view?usp=sharing"
            target="_blank"
            rel="nofollow"
          >
            Terms and Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
