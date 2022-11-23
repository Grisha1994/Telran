let form = document.querySelector(".product-form")
let productName = document.querySelector("input[name='product-name']")
let productPrice = document.querySelector("input[name='product-price']")
let productsWrapper = document.querySelector(".products-wrapper")

let products = [
    {
        name: "Velosiped",
        price: 40000
    },
    {
        name: "Samocat",
        price: 15000
    },
    {
        name: "luigzi",
        price: 20000
    },
    {
        name: "snoybord",
        price: 25000
    },
]


form.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log(productName.value)
    console.log(productPrice.value)
})



function renderProducts(arr) {
    arr.forEach(function(element) {
        productsWrapper.innerHTML += 
        ` <div class="product">
            <p class="product-name">${element.name}</p>
            <p class="product-price">${element.price}</p>
        </div>`
    })
}
renderProducts(products)




