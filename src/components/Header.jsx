import React from "react";

const Header = () => {
  return (
    <section id="start" className="p-default mt-4">
      <div className="flex flex-col p-8 lg:p-8 rounded-2xl bg-header-sm md:bg-header bg-cover overflow-hidden h-[70vh] md:h-[75vh] lg:h-[85vh] bg-center">
        <h1 className="text-center mt-auto max-w-4xl mx-auto text-th-secondary">
          Innovative solutions for a changing world
        </h1>
        <a
          href="#contacts"
          className="mt-8 lg:mt-16 relative text-center mx-auto iconBtn btnImg bottom-right"
        >
          Our services
        </a>
      </div>
    </section>
  );
};

export default Header;
