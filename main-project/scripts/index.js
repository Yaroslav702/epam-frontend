let products = [
    {
        name: "Google Pixel 3 XL",
        price: 648,
        photo: "images/product-1.jpg",
        inCart: 0
    },
    {
        name: "Google Pixel 2 XL",
        price: 500,
        photo: "images/product-2.jpg",
        inCart: 0
    },
    {
        name: "Apple iPhone XR",
        price: 714,
        photo: "images/product-3.jpg",
        inCart: 0
    },
    {
        name: "OnePlus 7 Pro",
        price: 327,
        photo: "images/product-4.jpg",
        inCart: 0
    },
    {
        name: "Samsung Galaxy S10 Plus",
        price: 1114,
        photo: "images/product-5.jpg",
        inCart: 0
    },
    {
        name: "Samsung Galaxy Note 9",
        price: 170,
        photo: "images/product-6.jpg",
        inCart: 0
    },
    {
        name: "Dell Alienware 17 R5 VR",
        price: 2300,
        photo: "images/product-7.jpg",
        inCart: 0
    },
    {
        name: "MSI Gaming MSI GT83 8RG-007IN",
        price: 5170,
        photo: "images/product-8.jpg",
        inCart: 0
    },
    {
        name: "CHUWI HeroBool Pro 14.1",
        price: 439,
        photo: "images/product-9.jpg",
        inCart: 0
    },
    {
        name: "Apple MacBool Air",
        price: 1150,
        photo: "images/product-10.jpg",
        inCart: 0
    },
    {
        name: "Asus ROG Zephyrus S17 GX701LWS-HG110T",
        price: 3200,
        photo: "images/product-11.jpg",
        inCart: 0
    }
];
let carts = document.querySelectorAll('.btn__buy');

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalSum(products[i]);
        displayCart();
    })
}


function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart-counter').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = +localStorage.getItem('cartNumbers');

    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart-counter').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(".cart-counter").textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }


    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalSum(product) {
    let cartCost = localStorage.getItem('totalCost');
    if (cartCost != null) {
        cartCost = Number(cartCost)
        localStorage.setItem("totalCost", cartCost + product.price)
    } else {
        localStorage.setItem("totalCost", product.price)
    }

}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.cart-menu__items');
    let cartCost = localStorage.getItem('totalCost');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
        <div class="product">
            <img height = '100' style = "min-width: 50px" src="${item.photo}">
            <div style="">
                <div class="product-title">${item.name}</div>
                <div class="product-price">$${item.price}</div>
            </div>
            <div>
                <div class="product-count__plus"></div>
                <div class"product-count">${item.inCart}</div>
                <div class="product-count__minus"></div>
            </div>
            <div class="product-remove"></div>
        </div>
        `
        })
    }
    if (cartCost !== null) {
        productContainer.innerHTML += `
            <div class="product-total">Total: $ ${cartCost}</div>
            <button class="products-cart__clear" onclick="clearCart()">Clear Cart</button>`
    }

}

displayCart();


function clearCart() {
    let productContainer = document.querySelector('.cart-menu__items');
    localStorage.clear();
    productContainer.innerHTML = '';
    document.querySelector('.cart-counter').textContent = 0;
}



let cart = document.querySelector('.cart');
let cartMenu = document.querySelector('.cart-menu');
let cartMenuClose = document.querySelector('.cart-menu__close');
let main = document.querySelector('.main-section');

cart.addEventListener('click', () => {
    cartMenu.classList.remove('disabled');
    document.body.classList.add('no-scroll');
    document.querySelector('.modal').classList.add('open');
})

cartMenuClose.addEventListener('click', () => {
    cartMenu.classList.add('disabled');
    document.body.classList.remove('no-scroll');
    document.querySelector('.modal').classList.remove('open');
})

onLoadCartNumbers();

cartMenu.addEventListener('click', event => {
    if (event.target.classList.contains('product-remove')) {
        let total = JSON.parse(localStorage.totalCost);
        let price = event.target.parentElement.querySelector('.product-price').innerHTML.slice(1);
        let result = total - +price;
        localStorage.setItem('totalCost', result);
        let productNumbers = +localStorage.getItem('cartNumbers');

        if (productNumbers >= 1) {
            localStorage.setItem("cartNumbers", productNumbers - 1); 
            
        }
        const cart = JSON.parse(localStorage.productsInCart);
        delete cart[event.target.parentElement.querySelector('.product-title').innerHTML]
        localStorage.productsInCart = JSON.stringify(cart);
        displayCart();
        
    }
 
});
