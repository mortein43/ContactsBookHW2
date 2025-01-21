import React, { createContext, useContext, useState } from "react";
import ContactRepository from "./ContactRepository";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactRepo] = useState(new ContactRepository());
  return (
    <ContactContext.Provider value={contactRepo}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactRepository = () => useContext(ContactContext);
