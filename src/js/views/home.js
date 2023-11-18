import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Single } from "./singleContact";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
								<Single />
							{//<Link to={"/single/" + index}>
								//<span>Link to: {item.title}</span>
							//</Link>
							// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
						</li>
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



