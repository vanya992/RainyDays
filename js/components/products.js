const productsContainer = document.querySelector(".products");
const displayContainer = document.querySelector(".products_display");

let http = new XMLHttpRequest();

http.open("get", "../data/products.json", true);

http.send();

http.onload = function (data) {
    if (this.readyState === 4 && this.status === 200) {
        let products = JSON.parse(this.responseText)
        output = "";
        
        console.log(products);

        for (let item of products) {
            output += `<div class="product_display">
                        <a href="${item.name}.html" aria-label="jacket"><div class="product">
                        <figure> <img src="${item.image}" alt="Product jacket" class="products_image">
                        </figure>
                        <div class="product_details">
                        <h2>${item.name}</h2>
                        <h3>${item.description}</h3>
                        <p>${item.price}</p>
                        <input type="button" value="View more" class="cta_button"></a>
                        </div></div></div>`
        }

        displayContainer.innerHTML += output;
    }
};




// async function getProduct() {
//     try {
//         const response = await fetch("/data/products.json");

//         const results = await response.json();

//         const jackets = results.products;
        
//         console.log(jackets);

//         displayContainer.innerHTML = "";

//         for (let i = 0; i < jackets.length; i++) {
//             displayContainer.innerHTML +=  `<div class="products_display" >
//             <a href="${jackets[i].id}" aria-label="jacket"><div class="product">
//               <figure> <img src="${jackets[i].image}" alt="Product jacket" class="products_image">
//             </figure>
//             <div class="product_details">
//             <h2>${jackets[i].name}</h2>
//             <h3>${jackets[i].description}</h3>
//             <p>${jackets[i].price}</p>
//             <input type="button" value="View More" class="cta_button"></a>
//             </div>`
//         }
//     }
//     catch (error) {
//     }
// };

// getProduct();