const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts:[],
			agenda:"NOT_FOUND",
			agendas:[],
			contactEdit:[],
			// contact:null
			

		},
		actions: {
			addContact: async(newContact) => {
				let { contacts } = getStore();
				const url = "https://playground.4geeks.com/apis/fake/contact/";
				const options = {
				  method: 'POST',
				  body: JSON.stringify(newContact),
				  headers: { 'Content-Type': 'application/json' } 
				};
		
				await fetch(url, options)
				  .then(res => res.json()) 
				  .then(response => {
					console.log('Success: ', JSON.stringify(response));
					
				  })
				  .catch(error => console.log('Error: ', error));
			  },
			  getContacts: () => {
				let {agenda} = getStore()
				const url = `https://playground.4geeks.com/apis/fake/contact/agenda/${agenda}`;
				const options = {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json'
				  }
				};
		
				fetch(url, options)
				  .then(response => {
					if (!response.ok) {
					  throw new Error("Error");
					}
					return response.json();
				  })
				  .then(body => {
					setStore({ contacts: body });
					
				  })
				  .catch(error => console.log('Error: ', error));
			  },
			  getAllAgendas:()=>{
				
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda";
				const options = {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json'
				  }
				};
		
				fetch(url, options)
				  .then(response => {
					if (!response.ok) {
					  throw new Error("Error");
					}
					return response.json();
				  })
				  .then(body => {
					setStore({ agendas: body });
					
				  })
				  .catch(error => console.log('Error: ', error));
			  },
			  selectAgenda:(el)=>{
				setStore({agenda:el})
				let { agenda } = getStore()
				console.log("LA AGENDA ES" + agenda )
			  },
			  updateContact: async(id)=>{
				let {contactEdit} = getStore()
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
				const options = {
				  method: 'PUT',
				  body: JSON.stringify(contactEdit),
				  headers: { 'Content-Type': 'application/json' } 
				}
				await fetch(url, options)
				.then(response => response.json()) 
				.then(response => {
				  console.log('Success: ', JSON.stringify(response));
				  
				})
				.catch(error => console.log('Error: ', error));
			  },

			  setContactEdit: (newContact)=>{
				setStore({contactEdit: newContact })
			  },
			  getContact:async(id)=>{		
				console.log(id)
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
				const options = {
				  method: 'GET',
				  headers: {
					'Content-Type': 'application/json'
				  }
				};
				try {
					let response = await fetch(url, options)
					if (!response.ok) {
						throw new Error("Error");
					  }
					else{
					let res = await response.json()
					return res[0]
					}
				} catch (error) {
					console.error('Error '+error)
				}
			
				  
			},
			deleteContact:async(id)=>{		
				console.log(id)
				const url = `https://playground.4geeks.com/apis/fake/contact/${id}`;
				const options = {
				  method: 'DELETE',
				  headers: {
					'Content-Type': 'application/json'
				  }
				};
				try {
					let response = await fetch(url, options)
					if (!response.ok) {
						throw new Error("Error");
					  }
					else{
					let res = await response.json()
					return res[0]
					}
				} catch (error) {
					console.error('Error '+error)
				}
			
				  
			}

			  
			
		}
	};
};

export default getState;