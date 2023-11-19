import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState();
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress]=useState("");
	const [agenda, setAgenda] = useState("");
  
  
	const CONTACT = store.contacts;
  
	useEffect(() => {
	  actions.getContacts();
	  actions.getAllAgendas();
	  console.log(store.agenda);

	}, [agenda, CONTACT]);

	return (
		<>
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
		</>
	);
};
