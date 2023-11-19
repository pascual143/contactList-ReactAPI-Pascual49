import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.agendas);
	const [name, setName] = useState();
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress]=useState("");
	const [agenda, setAgenda] = useState("");
  
  
	const CONTACT = store.contacts;

	useEffect(() => {
	  // actions.getContacts();
	  actions.getContact();
	  //console.log(store.getAllAgendas());

	}, [agenda]);

	return (
		<div className="container">
			<ul className="list-group">
			<button
            type="button"
            className="btn btn-primary"
            onClick={actions.agendas}
          >
            Agenda seleccionada: {store.agendas}
          </button>
			</ul>
			<Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
		</div>
	);
};

// {actions.addContact.contacts.map((contacts, index) => {
// 	return (
// 		<ul>
// 			<li key={index}>
// 				<h2>{contacts.email}</h2>
// 			</li>
// 		</ul>
// 	);
// })}



