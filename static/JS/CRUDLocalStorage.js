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

  addProductToCar: (newProduct) => {
    let productsCarArray = JSON.parse(localStorage.getItem("productsCarArray")) || [];
    let existingProduct = productsCarArray.find((product) => product.title === newProduct.title);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      productsCarArray.push(newProduct);
    }

    localStorage.setItem("productsCarArray", JSON.stringify(productsCarArray));
    alert("Produto adicionado ao carrinho com sucesso!");
  },

  getProductsOncCar: (number) => {
    let productsCarArray = JSON.parse(localStorage.getItem("productsCarArray")) || [];
    if(number){
      return productsCarArray.length;
    }else{
      return productsCarArray;
    }
  }
};
