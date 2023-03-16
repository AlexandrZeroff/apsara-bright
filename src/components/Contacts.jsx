import React from "react";
import Userform from "../snippets/Userform";


const Contacts = () => {
  return (
    <section id="contacts" className="p-default">
      <div className="my-8 rounded-2xl bg-th-bg-dark px-4 py-8 md:py-16 flex flex-col">
        <h1 className="text-center text-th-secondary">Send a message</h1>
        <h2 className="text-th-secondary mt-4 text-center">
          and we will call you
        </h2>
        <Userform />
      </div>
    </section>
  );
};

export default Contacts;
