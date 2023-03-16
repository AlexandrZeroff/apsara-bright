import React from "react";
import Service from "../snippets/Service";
import { serviceList } from "../services";

const Services = () => {
  return (
    <section id="services-detailed" className="">
      {serviceList.map((service, index) => (
        <Service
          key={index}
          id={service.id}
          header={service.header}
          image_sm={service.poster_sm}
          image={service.poster}
          subheader={service.text}
          texts={service.texts}
          tag={index + 1}
          next_link={service.next_link}
          next_header={service.next_header}
          end={index % 2 === 0 ? false : true}
        />
      ))}
    </section>
  );
};

export default Services;
