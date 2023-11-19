const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			agendas: [],
			agenda:"NOT_FOUND",
			formData: {
				full_name: '',
				email: '',
				phone: '',
				address: '',
			},
		},
		actions: {
			fetchAPI: () => {    
			fetch("https://playground.4geeks.com/apis/fake/contact/")
			  .then((response) => response.json())
			  .then((data) => setStore(data))
			  .catch((error) => console.error("Error fetching tasks from API", error))},
			
			//Get Agenda
			getContact: () => {
			fetch("https://playground.4geeks.com/apis/fake/contact/agenda/pascual", {
				method: "GET",
				headers: {
				  "Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then(body => {
					setStore({ agendas: body });
				  })
				.catch((error) => console.error("Error getting Agendas to API", error));
				}
			},
			//Get Agenda
			//updateContact: () => {
			//	fetch("https://playground.4geeks.com/apis/fake/contact/agenda/pascual", {
			//		method: "PUT",
			//		headers: {
			//		  "Content-Type": "application/json",
			//		},
			//	})
			//		.then((response) => response.json())
			//		.then(body => {
			//			setStore({ formData: body });
			//		  })
			//		.catch((error) => console.error("Error getting Agendas to API", error));
			//		}
			//	},
		}
	};

export default getState;
