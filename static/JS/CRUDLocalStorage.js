export const CRUDLocalStorage = {
  addClient: (newClient) => {
    let clientsArray = JSON.parse(localStorage.getItem("clientsArray")) || [];
    clientsArray.push(newClient);
    localStorage.setItem("clientsArray", JSON.stringify(clientsArray));

    alert("Cliente cadastrado com sucesso!");
  },

  getClientsArray: () => {
    let clientsArray = JSON.parse(localStorage.getItem("clientsArray")) || [];

    return clientsArray;
  },
};
