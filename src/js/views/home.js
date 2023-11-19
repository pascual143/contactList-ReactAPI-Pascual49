import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);
  const [showForm, setShowForm] = useState(false);
  if (!store) {
    return <div>Loading...</div>;
  }

	return (
	<>
		<div className="container">
		<div>
		  <div >
			<Link to="/MyForm">
			  <button
  
				className="createNewContact btn btn-primary"
			  >
				Add New Contact
			  </button>
  
			</Link>
  
		  </div>
		</div>
		<div className="contacts-grid">
		  <ul>
			{store.contacts.map((contact, index) => (
			  <li className="border border-1 row" key={index}>
				<div className="col-4">
				  <img src="https://images.squarespace-cdn.com/content/v1/58b4791ad2b857c893179e34/1537971642021-LHW76T7O8JG0M4GLTSTP/IMG_2818.jpg" style={{ width: "10rem" }} class="mx-5 rounded-circle" alt="..." />
				</div>
				<div className="col-6">
				  <h2>{contact.full_name}</h2>
				  <p> <i className="fas fa-envelope" /> {contact.email}</p>
				  <p> <i className="fas fa-phone" /> {contact.phone}</p>
				  <p><i className="fas fa-map-marker" /> {contact.address}</p>
				 
  
				</div>
				<div className=" col-2 icon-buttons">
				  
					<i className="fas fa-edit" onClick={() => navigate(`/MyForm/${index}`)} />
					<i className="fas fa-trash" onClick={() => actions.deleteContact(contact, index)} />
  
  
				  </div>
			  </li>
			))}
		  </ul>
		</div>
		<hr />
	  </div>
	  </>
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



