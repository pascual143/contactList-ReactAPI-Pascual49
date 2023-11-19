import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const Form = () => {
  const { store,actions } = useContext(Context);
  const [inputFullName, setInputFullName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const { index } = useParams();



  const handleSubmit = (e) => {
    e.preventDefault()
    let newContact = {
      full_name: inputFullName,
      email: inputEmail,
      phone: inputPhone,
      address: inputAddress,
    };

    if (index !== undefined) {
      newContact["id"]= store.contacts[index].id 
      actions.editContact(newContact, index);
    } else {
      actions.addContact(newContact);
    }
  };


  return (
    <div className="form">
      <h1>Add a new contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            placeholder="Full name"
            value={inputFullName}
            onChange={(e) => {
              setInputFullName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={inputEmail}
            onChange={(e) => {
              setInputEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter phone"
            value={inputPhone}
            onChange={(e) => {
              setInputPhone(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            placeholder="Enter address"
            value={inputAddress}
            onChange={(e) => {
              setInputAddress(e.target.value);
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="createNewContact btn btn-success"

        >
          Save
        </button>
        <Link to="/">Or go Back to Contacts</Link>


      </form>

    </div >
  );
};