import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";

export const Single = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [edit, setEdit] = useState("");
  const [deleteContact, setDeleteContact] = useState([]);

  function deleteItem() {
    setDeleteContact();
  }

  function editItem() {
    setEdit();
  }
  // <h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

  return (
    <div className="container">
      <div className="row m-2">
        <div className="col-2">
          <img src={rigoImage} className="w-75 rounded m-2" />
        </div>
        <div className="col-6">
          <div>nombre:</div>
          <div>direccion:</div>
          <div>phone:</div>
          <div>email:</div>
        </div>
        <div className="col-2">
          <a onClick={() => editItem()}>edit</a>
          <a onClick={() => deleteItem()}>delete</a>
        </div>
      </div>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
