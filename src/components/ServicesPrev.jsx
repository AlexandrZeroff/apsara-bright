import React from "react";
import ServicePrev from "../snippets/ServicePrev";
import { serviceList } from "../services";

const ServicesPrev = () => {
  return (
    <section id="services" className="p-default flex flex-col">
      <h1 className="mt-12 text-center text-th-primary">Our services</h1>
      <div className="mx-auto mt-8 grid grid-cols-2 gap-4 md:gap-8 md:flex flex-wrap md:justify-center lg:grid lg:grid-cols-6 lg:gap-x-4">
        {serviceList.map((service, index) => (
          <ServicePrev
            link={"#" + service.id}
            image={service.prev}
            header={service.header}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesPrev;
