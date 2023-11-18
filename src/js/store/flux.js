const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			formData: {
				Name: '',
				email: '',
				phone: '',
				address: '',
			},
		},
		actions: {
          				// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			loadData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				    fetchTasksFromAPI = () => {    
					fetch("https://playground.4geeks.com/apis/fake/contact/agenda/")
					  .then((response) => response.json())
					  .then((data) => setStore(data))
					  .catch((error) => console.error("Error fetching tasks from API", error));
				};
				      //Add Task
					addContact = () => {
					fetch("https://playground.4geeks.com/apis/fake/contact/agenda/pascual", {
						method: "PUT",
						headers: {
						  "Content-Type": "application/json",
						},
						body: JSON.stringify({
							"full_name": contact.name,
							"email": contact.email,
							"agenda_slug": "pascual",
							"address": contact.address,
							"phone": contact.phone,
						}),
					})
						.then((response) => response.json())
						.then(() => {
						  setStore();
						})
						.catch((error) => console.error("Error adding task to API", error));
						}
					}
			},
			//changeColor: (index, color) => {
			//	//get the store
			//	const store = getStore();
//
			//	//we have to loop the entire demo array to look for the respective index
			//	//and change its color
			//	const demo = store.demo.map((elm, i) => {
			//		if (i === index) elm.background = color;
			//		return elm;
			//	});
//
			//	//reset the global store
			//	setStore({ demo: demo });
			//}
		}
	};

export default getState;
