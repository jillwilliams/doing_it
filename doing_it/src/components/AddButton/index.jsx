import React from 'react';

var count = document.getElementById("itemCountBox").value;
var addOne = count + 1;
document.getElementById("addItemToCart").addEventListener("click", addItemToCart);
const addItemToCart = ( ) => {
    document.getElementById("itemCountBox").innerHTML= addOne;
};
var subtractOne = count - 1;
document.getElementById("subtractItemFromCart").addEventListener("click", subtractItemFromCart);
const subtractItemFromCart = ( ) => {
    document.getElementById("itemCountBox").innerHTML= subtractOne;
};