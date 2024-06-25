const listProducts = document.getElementById("listProducts");
const form = document.getElementById("form");

import { servicesProducts } from "./product-service.js";

servicesProducts.productList().then((products) => {
    products.forEach((product) => {
        listProducts.innerHTML += htmlSctructure(
            product.name,
            product.price,
            product.image,
            product.id
        );
    });
    loadButtons();
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const newProduct = await servicesProducts.createProduct(
        e.target.name.value,
        e.target.price.value,
        e.target.image.value
    );

    showNewProduct(
        e.target.name.value,
        e.target.price.value,
        e.target.image.value,
        newProduct.id
    );
    form.reset();
    loadButtons();
});

const showNewProduct = (name, price, image, id) => {
    listProducts.innerHTML += htmlSctructure(name, price, image);
};

const htmlSctructure = (name, price, image, id) => {
    return `
        <li id="${id}">
            <img src="${image}" alt="${name} image">
            <h2>${name}</h2>
            <div class="productInfo">
                <p>$ ${price}</p>
                <img id="buttonDelete" src="./images/lixeira.png" alt="icone lixeira">
            </div>
        </li>
        `;
};

const loadButtons = () => {
    const buttonDelete = document.querySelectorAll("#buttonDelete");
    buttonDelete.forEach((button) => {
        button.addEventListener("click", (e) => {
            servicesProducts.deleteProduct(e.target.parentElement.parentElement.id);
            e.target.parentElement.parentElement.remove();
        });
    });
};