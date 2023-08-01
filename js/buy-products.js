// products array
let products = [
    {
        id:1,
        title:"Sample product 1",
        price:456.00.toFixed(2),
        category:"Shirts",
        image1:"../images/black-front.jpg",
        image2:"../images/black-rear.jpg",
        rating:4,
        options:{
            colors:["color-01", "color-02", "color-03"],
            sizes:["S","M","L","XL"]
        }
    },
    {
        id:2,
        title:"Sample product 2",
        price:200.00.toFixed(2),
        category:"Shirts",
        image1:"../images/blue-white-front.jpg",
        image2:"../images/blue-white-rear.jpg",
        rating:5,
        options:{
            colors:["color-05", "color-04",],
        }  
    },
    {
        id:3,
        title:"Sample product 7",
        price:1000.00.toFixed(2),
        category:"Shoes",
        image1:"../images/shoes-orange-side2.jpg",
        image2:"../images/shoes-orange-side.jpg",
        rating:4,
        options:{
            colors:["color-04", "color-01"],
            sizes:["S","M","L","XL"]
        }
    },
    {
        id:4,
        title:"Sample product 4",
        price:1490.00.toFixed(2),
        category:"Hoodies",
        image1:"../images/hoodie-blue-front.jpg",
        image2:"../images/hoodie-blue-side.jpg",
        rating:4,
        options:{
            colors:["color-02", "color-06", "color-05"],
            sizes:["S","M","L","XL"]
        }
    },
    {
        id:5,
        title:"Sample product 5",
        price:2500.00.toFixed(2),
        category:"Kits",
        image1:"../images/keeper-kit-green-front.jpg",
        image2:"../images/keeper-kit-green-side.jpg",
        rating:4,
        options:{
            colors:["color-01", "color-02", "color-03"],
            sizes:["S","M","L","XL"]
        }
    },
    {
        id:6,
        title:"Sample product 6",
        price:657.00.toFixed(2),
        category:"Bags",
        image1:"../images/red-bag-front.jpg",
        image2:"../images/red-bag-side.jpg",
        rating:5,
        options:{
            colors:["color-05", "color-04",],
        }  
    },
    {
        id:7,
        title:"Sample product 3",
        price:1000.00.toFixed(2),
        category:"Shirts",
        image1:"../images/yellow-full-front.jpg",
        image2:"../images/yellow-full-rear.jpg",
        rating:4,
        options:{
            colors:["color-04", "color-01"],
            sizes:["S","M","L","XL"]
        }
    },
    {
        id:8,
        title:"Sample product 4",
        price:1490.00.toFixed(2),
        category:"Gloves",
        image1:"../images/gloves-front.jpg",
        image2:"../images/gloves-back.jpg",
        rating:4,
        options:{
            colors:["color-02", "color-06", "color-05"],
            sizes:["S","M","L","XL"]
        }
    },
];
// intialization of cart array
let cart = [];

// add products to shop page from the products Array.
let grid = document.querySelector(".products-grid");
if(grid){
    products.forEach(function(product){
        let colorHTML = ``;
        if(product.options.colors.length>0){
            product.options.colors.forEach(function(color){
                colorHTML = colorHTML + `
                    <div class="color-wrapper">
                        <div class="colors ${color}"></div>
                    </div>
                    `
            });
            colorHTML = `
            <div class="product-colors">`+
            colorHTML
            +`</div>`
        };
        grid.insertAdjacentHTML('beforeend', 
        `<div class="product-card-wrap col-4">
            <div class="product-card">
                <div class="image-wrapper" style="background-image: url(${product.image2});">
                    <img class=""src="${product.image1}" >
                </div>
                <div class="product-content">
                    <p class="product-category">${product.category}</p>
                    <div class="product-rating">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                    <h4>${product.title}</h4>
                    <p class="product-price">LKR${product.price}</p>`+
                    colorHTML+`
                    <button id="${product.id}" class="cart-btn"><ion-icon name="cart"></ion-icon> <span class="pro-cart-txt">Add To Cart</span></button>
                </div>
            </div>
        </div>`
        );
    });
};

// notification for products added to cart.
let cartBtns = document.querySelectorAll(".cart-btn");
for( i=0; i< cartBtns.length ; i++){
    cartBtns[i].addEventListener("click", function(){
        let cartList = products.filter(product => product.id == this.id);
        let cartCheck = cart.filter(product => product.id == this.id);
        if(cartCheck.length>0){
            for(i=0; i<cart.length; i++ ){
                if(cart[i].id == this.id){
                    cart[i].qty = cart[i].qty + 1;
                }
            }
        }else{
            cartList[0].qty = 1;
            cart.push(cartList[0]);
        };
        let cartNotice = document.querySelector(".cartNotify");
        cartNotice.insertAdjacentHTML('beforeend',
        `
        <a href="javascript:void(0)" class="closebtn" onclick="closeNotice()">&times;</a>
        <div class="modal-box">
            <div class="row">
                <div class="left-col-cat flex-box">
                    <div class="flex-box">
                        <h3>✔️ Added to cart successfully!</h3>
                        <div class="">
                            <img class="cart-not-img" src="${cartList[0].image1}">
                        </div>
                    </div>
                    <div class="not-cat-content">
                            <p class="">${cartList[0].title}</p>
                            <p class="">QTY : 1</p>
                            <p>TOTAL:LKR${cartList[0].price}</p>
                    </div>
                </div>
                <div class="right-col-cat flex-box">
                    <button class="btn" onclick="closeNotice()">CONTINUE SHOPPING</button>
                    <button class="btn-blue" onclick="showCart()">VIEW CART</button>
                </div>
            </div>
        </div>
        `
        );
        cartNotice.style.height = "100%";
    });
};
//event listner to detect click of 3 products per column button
document.getElementById("col-3-btn").addEventListener("click", function(){
    let selected = this; 
    changeCol(selected);
});
//event listner to detect click of 4 products per column button
document.getElementById("col-4-btn").addEventListener("click", function(){
    let selected = this; 
    changeCol(selected);
});
//event listner to detect click of 6 products per column button
document.getElementById("col-6-btn").addEventListener("click", function(){
    let selected = this; 
    changeCol(selected);
});

// function to change the no.of columns according to the clicked button
function changeCol(selected) {
    let btnClasses = document.querySelectorAll(".col-btn");
    btnClasses.forEach(function(element) {
        element.classList.remove("col-btn-active");
        element.classList.add("col-btn-disable");
    });
    selected.classList.add("col-btn-active");
    let colnumber = selected.getAttribute('data-col'); 
    let classes = document.querySelectorAll(".product-card-wrap");
    classes.forEach(function(element) {
        element.classList.remove(element.classList.item(1));
        element.classList.add("col-"+ colnumber);
    });
};
// color change function
let colors = document.querySelectorAll(".product-colors div");
for( i=0; i< colors.length ; i++){
    colors[i].addEventListener("click", function(){
        let current = this;
        if(current.closest(".product-colors").classList.contains("filter-colors")===false){
            if(current.classList.contains("color-active")===false){
                current.closest(".product-colors").querySelectorAll("div").forEach(function(otherElement){
                    if(otherElement.classList.contains("color-active")){
                        otherElement.classList.remove("border-active","color-active");
                        if(otherElement.querySelector(".colors") != null){
                            otherElement.querySelector("div").classList.remove("color-selected");
                        };
                    };
                });
                current.classList.add("color-active");
            };
        }else{
            if(current.classList.contains("color-active")===false){
                current.classList.add("color-active");
                current.classList.add("border-active");
                if(current.querySelector("div") != null){
                    current.querySelector(".colors" ).classList.add("color-selected");
                };
            }else{
                current.classList.remove("color-active");
                if(current.querySelector(".colors") != null){
                    current.classList.remove("border-active");
                    current.querySelector("div").classList.remove("color-selected");
                };
            };  
        };
    });
    colors[i].addEventListener("mouseover", function(){
        if(this.classList.contains("color-active")===false){
            this.classList.add("border-active");
            if(this.querySelector("div") != null){
                this.querySelector(".colors" ).classList.add("color-selected");
            };
        };
    });
    colors[i].addEventListener("mouseout", function(){
        if(this.classList.contains("color-active")===false){
            this.classList.remove("border-active");
            if(this.querySelector(".colors") != null){
                this.querySelector("div").classList.remove("color-selected");
            };
        };
    });
};

//open side filter
function openFilter() {
    document.querySelector(".sideFilter").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
};

// close side filter
function closeFilter() {
    document.querySelector(".sideFilter").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
};
// show products added to cart notification
function showNotice() {
    document.querySelector(".cartNotify").style.height = "100%";
};
// hide products added to cart notification
function closeNotice() {
    document.querySelector(".cartNotify").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".cartNotify").style.transition = "0s";
    }, 1000);
    setTimeout(() => {
        document.querySelector(".cartNotify").style.height = "0";
    }, 1010);
    setTimeout(() => {
        document.querySelector(".cartNotify").style.opacity = "1";
        document.querySelector(".cartNotify").style.transition = "0.5s";
    }, 1050);
};

//show cart page and add dynamic data
function showCart() {
    closeNotice();
    let cartTable = ``;
    if(cart.length>0){
        cart.forEach(function(item){
            cartTable = cartTable + `
            <tr data-id="${item.id}">
                <td class="product-cell">
                    <div class="pro-cell-wrapper">
                        <div class="table-col del-col">
                            <div onclick="deleteCart(this)">
                                <svg class="del-btn" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="table-col col-2">
                            <img class="cart-img" src="${item.image1}"/>
                        </div>
                        <div class="table-col col-2 flex-box">
                            <h4>${item.title}</h4>
                            <p>Category</p>
                            <p class="table-color">Color</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="table-col flex-box">
                        <P>LKR${item.price}</P>
                    </div>
                </td>
                <td>
                    <div class="table-col flex-box">
                        <input class="qty" onchange="updateQty(this)" type="number"min="1" value="${item.qty}" data-price="${item.price}" />
                    </div>
                </td>
                <td class="subtotal-cell">
                    <div class="table-col flex-box">
                        <P class="item-total">LKR${item.price}</P>
                    </div>
                </td>
            </tr>
            `
        });
    };
    let leftCol = document.querySelector(".cart-left-col");
        leftCol.innerHTML=`
        <table class="cart-table">
        <tr>
            <th class="product-t-h product-cell">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
        </tr>
        `+cartTable+`
        </table>
        `
    document.getElementById("cart-total").innerHTML="LKR"+cartTotal().toFixed(2);
    document.querySelector(".cart").style.width = "100%";
};

// hide cart page
function closeCart() {
    document.querySelector(".cart").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".cart").style.transition = "0s";
        document.querySelector(".cart").style.width = "0%";
    }, 500);
    setTimeout(() => {
        document.querySelector(".cart").style.opacity = "1";
        document.querySelector(".cart").style.transition = "0.5s";
    }, 600);
};

//product quantity update
let qty = document.querySelectorAll(".qty");
for( i=0; i< qty.length ; i++){
    qty[i].addEventListener("change", function(){
    });
};

//calculate cart total
function cartTotal (){
    let total = 0;
    for(i=0; i<cart.length; i++ ){
        total = total + cart[i].price * cart[i].qty;
    };
    return total;
};

//remove a product from cart table
function deleteCart (element){
    let product_id = element.closest("tr").getAttribute("data-id");
    for(n=0; n<cart.length; n++){
        if(product_id == cart[n].id){
            cart.splice(n, 1);
        }
    };
    let tbletr = element.closest("tr");
    tbletr.style.transition = "0.5s";
    tbletr.style.opacity = "0";
    setTimeout(() => {
        tbletr.remove();
        document.getElementById("cart-total").innerHTML="LKR"+cartTotal().toFixed(2);
    }, 500);
};

//update the subtotal and total prices
function updateQty (element){
    let total = 0;
    let totPrice = element.getAttribute('data-price'); 
    element.closest("tr").querySelector(".item-total").innerHTML = "LKR"  +(element .value * (parseInt(totPrice))).toFixed(2);
    let product_id = element.closest("tr").getAttribute("data-id");
     for(i=0; i<cart.length; i++ ){
        if(cart[i].id == product_id){
            cart[i].qty = element.value;
        };
    };
    for(i=0; i<cart.length; i++ ){
        total = total + cart[i].price * cart[i].qty;
    };
    document.getElementById("cart-total").innerHTML="LKR"+cartTotal().toFixed(2);
};

// show invoice page
function invoiceShow() {
    let infoForm = document.querySelector(".info-form");
    let validateForm = formValidate(infoForm);
    if(validateForm === "" && cart.length>0){
        let productRows = ``;
        closeCart();
        let totPrice = (cartTotal()).toFixed(2);
        cart.forEach(function(item){
            let subTotal = (item.price * item.qty).toFixed(2);
            productRows = productRows+`
            <tr>
                <td>
                    <div class="pro-cell-wrapper">
                        <div class="table-col col-2">
                            <img class="cart-img" src="${item.image1}"/>
                        </div>
                        <div class="table-col col-2 flex-box">
                            <h4>${item.title}</h4>
                            <p>${item.category}</p>
                            <p class="table-color">Color</p>
                        </div>
                    </div>
                </td>
                <td>
                    <div class="table-col flex-box">
                        <P>LKR${item.price}</P>
                    </div>
                </td>
                <td>
                    <div class="table-col flex-box">
                        <p>${item.qty}</p>
                    </div>
                </td>
                <td class="subtotal-cell">
                    <div class="table-col flex-box">
                        <P class="item-total">LKR${subTotal}</P>
                    </div>
                </td>
            </tr>
            `;
        });
        document.querySelector(".invoice-table").innerHTML =`
        <tr>
            <th class="product-t-h ">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
        </tr>
        `+productRows+`
        <tr>
            <td colspan="3">
                <P class="item-total text-right bolded">Total Price:</P>
            </td>
            <td>
                <P class="item-total bolded">LKR${totPrice}</P>
            </td>
        </tr>
        `
        document.getElementById("street").innerHTML =infoForm.street.value;
        document.getElementById("email").innerHTML =infoForm.email.value.toLowerCase();
        document.getElementById("city").innerHTML =capitalizeFirst(infoForm.city.value);
        document.getElementById("name").innerHTML =capitalizeFirst(infoForm.firstName.value) +" "+ capitalizeFirst(infoForm.lastName.value);
        document.querySelector(".invoiceModel").style.height = "100%";
    }else{
        if(validateForm !== ""){
            alert(validateForm);
        }else{
            alert("Atleast add one Item to the cart.");
        };
    };
};

// validate form
function formValidate(inputs){
    let notice = "";
    let mailValid = [];
    let emptyInputs = [];
    if(inputs.firstName.value == "" ){
        emptyInputs.push("First Name");
    };
    if(inputs.lastName.value == "" ){
        emptyInputs.push("Last Name");
    };
    if(inputs.email.value == "" ){
        emptyInputs.push("Email address");
    }else{
        let email = inputs.email.value;
        let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        mailValid = email.match(regex);
    };
    if(inputs.street.value == "" ){
        emptyInputs.push("Street");
    };
    if(inputs.city.value == "" ){
        emptyInputs.push("City");
    };
    if(emptyInputs.length == 1){
        if(mailValid === null){
            notice = "Enter a valid email address and fill the "+emptyInputs[0]+" Field";  
        }else{
            notice = "Please fill the "+emptyInputs[0]+" Field";
        };
    }else if(emptyInputs.length >1){
        let FieldText = "";
        for(i = 0; i<(emptyInputs.length-2); i++){
            FieldText = FieldText+emptyInputs[i]+", ";
        };
        FieldText = FieldText+emptyInputs[emptyInputs.length - 2]+" and "+emptyInputs[emptyInputs.length - 1];
        if(mailValid === null){
            notice = "Please enter a valid email address and fill the "+FieldText+" Fields";
        }else{
            notice = "Please fill the "+FieldText+" Fields";
        };
    }else {
        if(mailValid === null){
            notice = "Please enter a valid email addres";
        }else{
        };
    };
    return notice;
};

// hide invoice
function closeInovice(){
    document.querySelector(".invoiceModel").style.height = "0";
    cart = [];
};

// Convert first letter to uppercase and other letters to lowercase.
function capitalizeFirst(word) {
    let lowerWord = word.toLowerCase();
    return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
  };