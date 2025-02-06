import { CRUDLocalStorage } from "./CRUDLocalStorage.js";

function displayProductsOnShoppingCar() {
  const selectedProducts = CRUDLocalStorage.getProductsOncCar(false);
  if (!!selectedProducts.length) {
    let productsHTML = "";
    selectedProducts.forEach((product, index) => {
      productsHTML += `
            <div class="productCard">
                <img class="productImage" src="${product.image}" alt="Imagem do produto">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <h4>Preço: R$${product.price}</h4>
                <h4>Quantidade: ${product.quantity}</h4>
                <button class="removeProductButton" id="${index}">Remover</button>
            </div>
        `;
    });

    document.getElementById("main").innerHTML = productsHTML;

    selectedProducts.forEach((product,index) => {
        document.getElementById(`${index}`).addEventListener('click', () => {
            CRUDLocalStorage.removeProductShoppingCar(`${product.title}`);
            window.location.reload();
        });
    });
  }
}

window.onload = displayProductsOnShoppingCar;
