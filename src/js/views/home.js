import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store);


	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((contact, index) => {
					return (
						<ul>
							<li key={index}>
								<h2>{contact.full_name}</h2>
							</li>
						</ul>
					);
				})}
			</ul>
			<Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
		</div>
	);
};



