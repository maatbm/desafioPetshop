import { CRUDLocalStorage } from "./CRUDLocalStorage.js";

async function fetchProducts(){
    try{
        let response = await fetch('/static/JS/productsData.json');
        if(!response.ok){
            throw new Error('Erro ao carregar os produtos: ' + response.statusText);
        }
        const productsList = await response.json();

        return productsList;

    } catch(error){
        console.error(error);

        return [];
    }
}

async function displayProducts(){
    try{
        shoppingCarNumber();
        const productsList = await fetchProducts();
        if(!!productsList.length){
            let productsHTML = '';
            productsList.forEach((product, index) => {
                productsHTML += `
                    <div class="productCard" id="${index}">
                        <img class="productImage" src="${product.image}" alt="Imagem do produto">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                        <h4>Preço: R$${product.price}</h4>
                    </div>
                `;
            });

            document.getElementById('main').innerHTML = productsHTML;

            productsList.forEach((product, index) => {
                document.getElementById(`${index}`).addEventListener('click', () => {
                    let selectedProduct = {
                        image: `${product.image}`,
                        title: `${product.title}`,
                        description: `${product.description}`,
                        price: `${product.price}`,
                        quantity: 1
                    };
                    CRUDLocalStorage.addProductToCar(selectedProduct);
                    shoppingCarNumber();
                });
            });
        }

    } catch(error){
        console.error(error);
    }
}

function shoppingCarNumber(){
    const products = CRUDLocalStorage.getProductsOncCar(true);
    document.getElementById('carQuantity').innerText = products;
};

window.onload = displayProducts;