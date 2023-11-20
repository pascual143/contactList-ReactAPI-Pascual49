import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ProfilePic from "../../img/rigo-baby.jpg";

export const ContactList = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [agenda, setAgenda] = useState("");


  const contact = store.contacts;

  useEffect(() => {
    actions.getContacts();
    actions.getAllAgendas();    
    
  }, [agenda, contact]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "address") {
      setAddress(value);
    } else if (name === "agenda") {
      setAgenda(value);
    }
  };

  function selectAgenda(e) {
    setAgenda(e);
    actions.selectAgenda(e);
  }

  function saveChanges() {
    actions.selectAgenda(agenda);
  }
  

  const deleteitem = (deleteitem) => {
    actions.deleteContact(deleteitem)
    const newList = listItem.filter((el) => el.id !== deleteitem)
    store.contacts(newList)
}


const editContact = (id) => {
  const newContact = {
    full_name: name,
    email: email,
    agenda_slug: agenda,
    phone: phone,
    address: address,
    id:id
  };
  actions.setContactEdit(newContact)

  actions.updateContact(id);
  window.location.reload()
  console.log("Nuevo contacto JSON:", newContact);
};


const handleKeyPress = (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    editContact();
  }
};


  return (
    <>
      <nav className="navbar bg-body-tertiary d-flex justify-content-center">
        <div className="container d-flex justify-content-bewtween m-0 ">
          <Link to={"/add"}>
            <button type="button" className="btn btn-success">
              Add New Contact
            </button>
          </Link>
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={actions.getAllAgendas}
          >
            Agenda seleccionada: {store.agenda}
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {store.agendas.map((el, index) => (
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        onClick={() => selectAgenda(el)}
                        id={`exampleRadios${index}`}
                        value={`option${index}`}
                      />
                      <label
                        className="form-check-label"
                        for={`exampleRadios${index}`}
                      >
                        {el}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={saveChanges}
                    data-bs-dismiss="modal"
                    className="btn btn-success"
                  >
                    Success
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {store.agendas.length === 0 ? (
        <p>No hay contactos en la agenda.</p>
      ) :(
        store.agenda === "NOT_FOUND"?(
          <p>No hay contactos en la agenda.</p>
        ) :(
      contact.map((el, index) => (
        <div key={el.id} className="container " >
          <div className="row align-items-center border border-dark mt-4 rounded p-2">
            <div className="col-md-2 col-4 d-flex align-items-center justify-content-center">
              <img
                className="photoprofile rounded-circle"
                src={ProfilePic}
                alt="Photo"
                style={{width: '100px', height: '100px'}}
              />
            </div>
            <div className="col-md-7 col-8  d-flex justify-content-start mt-4 mt-0">
              <div className="text-start">
                <Link to={`/contact/${el.id}`} >
                  <h5 className="mb-0">{el.full_name}</h5>
                </Link>
                <p className="mb-0">Dirección: {el.address}</p>
                <p className="mb-0">Teléfono: {el.phone}</p>
                <p className="mb-0">Correo electrónico: {el.email}</p>
                <p className="mb-0">id: {el.id}</p>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-end mt-3 mt-md-0">
              {/* <!-- Button trigger modal Editar --> */}
              <button
                type="button"
                className="btn btn-primary m-2"
                data-bs-toggle="modal"
                data-bs-target="#ModalEditar"
              >
                edit
              </button>
              <button className="delete btn btn-danger" onClick={()=>deleteitem(el.id)}>Eliminar</button>
              {/*  <!-- Modal Editar--> */}
              <div
                className="modal fade"
                id="ModalEditar"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Edit Contact
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                    <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="form-control"
              id="fullName"
              aria-describedby="fullNameHelp"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              onKeyDown={handleKeyPress}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              className="form-control"
              id="phone"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={handleInputChange}
              className="form-control"
              id="address"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="agenda" className="form-label">
              Agenda
            </label>
            <input
              type="text"
              name="agenda"
              value={agenda}
              onChange={handleInputChange}
              className="form-control"
              id="agenda"
              onKeyDown={handleKeyPress}
            />
          </div>
          <button
            type="button"
            onClick={()=>editContact(el.id)}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))))}
    </>
  );
};