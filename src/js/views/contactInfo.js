import React, {useContext, useEffect, useState, } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import profilePic from '../../img/rigo-baby.jpg';

export const ContactInfo = () => {
  const { store, actions } = useContext(Context);
const params = useParams()
  const[contact, setContact]=useState(null)

  useEffect(()=>{
    const getData = async()=>{
      setContact(await actions.getContact(params.id))
    }
    getData()

  },[])

  console.log(contact)


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
            <h5>Nombre: {contact?.full_name} </h5>
            <p>Dirección: {contact?.address}</p>
            <p>Teléfono: {contact?.phone}</p>
            <p>Correo electrónico: {contact?.email}</p>
          </div>

        </div>
      </div>
    </div>
  );
};