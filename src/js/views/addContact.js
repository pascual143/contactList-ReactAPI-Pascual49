import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Form = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [agenda, setAgenda] = useState("");
  const [contactLink, setcontactLink] = useState(null);

const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "agenda") {
      setAgenda(value);
    }
  };

  const addContacts = () => {
    const newContact = {
      full_name: name,
      email: email,
      agenda_slug: agenda,
      phone: phone,
      address: address,
      
    };
    setcontactLink(newContact);
    actions.addContact(newContact);
    deleteHandleInputChange();
    console.log("Nuevo contacto JSON:", newContact);
  };

  const deleteHandleInputChange = () => {
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setAgenda("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addContacts();
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border border-dark rounded-3 p-4 w-75">
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="form-control"
              id="fullName"
              aria-describedby="fullNameHelp"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onKeyDown={handleKeyPress}
            />
            <div id="emailHelp" className="form-text">
              Your mail
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              className="form-control"
              id="phone"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleInputChange}
              className="form-control"
              id="address"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="agenda" className="form-label">
              Agenda
            </label>
            <input
              type="text"
              name="agenda"
              value={agenda}
              onChange={handleInputChange}
              className="form-control"
              id="agenda"
              onKeyDown={handleKeyPress}
            />
          </div>
          <button
            type="button"
            onClick={addContacts}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};