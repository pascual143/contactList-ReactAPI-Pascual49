import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [inputName, setInputName] = useState("");

	//function to manage the submit form
	const handleSumit = (e) => {
		e.preventDefault()
		let newContact = {
			name: inputFullName,
			email: inputEmail,
			phone: inputPhone,
			address: inputAddress,
		}
		newContact["id"]= store.contacts[index].id 
		actions.addContact(newContact);
	}

	return (
		<div className="container">
			<form onSubmit={handleSumit}>
			<label htmlFor="fullName">Full Name:</label>
			<input
            	type="text"
            	id="fullName"
            	placeholder="Full name"
            	value={inputName}
            	onChange={(e) => {
            	  setInputName(e.target.value);
            }}
          />
		  </form>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
