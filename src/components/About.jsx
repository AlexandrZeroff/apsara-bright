import React from "react";

const About = () => {
  return (
    <section id="about" className="p-default pt-8">
      <div className="border border-th-primary rounded-2xl pt-16 pb-24 px-4 md:px-8 lg:px-16 flex flex-col">
        <h1 className="mx-auto text-th-primary">About us</h1>
        <article className="bg-th-grey rounded-lg mt-8 flex flex-col md:flex-row py-8 md:py-16 px-8 sm:px-12 md:px-16 lg:px-32">
          <h3 className="text-th-primary flex-grow md:w-[45%]">
            We are a team of experienced professionals dedicated to providing
            customized IT solutions to businesses of all sizes and industries.
            With years of experience in the industry, we have helped many
            businesses succeed by leveraging the latest technologies and best
            practices.
          </h3>
          <div className="w-full h-[1px] border-b border-b-th-primary my-6 md:hidden"></div>
          <div className="">
            <div className="h-full w-[1px] border-l border-l-th-primary mx-8 md:mx-20 hidden md:block"></div>
          </div>
          <p className="md:text-base md:w-[45%]">
            Our team consists of highly skilled professionals who are passionate
            about technology and committed to delivering exceptional service and
            support to our clients. At our core, we are committed to delivering
            solutions that are aligned with our client's business objectives and
            that can help them achieve sustainable growth. We believe that
            technology can be a powerful enabler for businesses of all sizes,
            and we are passionate about helping our clients leverage it to its
            fullest potential.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
