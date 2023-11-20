import React, {useContext, useEffect, useState, } from "react";
import { Context } from "../store/appContext";
import profilePic from '../../img/rigo-baby.jpg';

import { Link, useParams } from 'react-router-dom';


export const ContactInfo = () => {
  const { store, actions } = useContext(Context);
  const[contact, setContact]=useState(null)
  const params = useParams();

  const [contacto, setContacto] = useState({});
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");



 // useEffect(() => {
 //   getContacto();
 // }, []);

  //if (!contact) {
  //  return <div>Loading...</div>;
  //}

  // console.log(contact)


  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="border border-dark rounded p-4">
        <div className="row d-flex align-items-center">
          <div className="col-flex justify-content-center mb-3 mb-md-0">
            <img
              className="photoprofile rounded-circle"
              src={profilePic}
              alt="profile"
              style={{width: '150px', height: '150px'}}
              
            />
          </div>
          <div className="col">
            
            <h5>Nombre: {email} </h5>
           
          </div>

        </div>
      </div>
    </div>
  );
};

// <p>Dirección: {contact}</p>
// <p>Teléfono: {contact}</p>
// <p>Correo electrónico: {contact}</p>