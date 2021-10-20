"use strict";

const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//
const orderButton = $('.add-to-order');

orderButton.on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
  
});

const placeOrderButton = $('#place-order');

placeOrderButton.on('click', () =>{
  //$('#coffee-sold-counter').html($('#cart-items').children().length);
  // let currentNum = parseInt($('#coffee-sold-counter').html());
  // currentNum += $('#cart-items').children().length;
  // $('#coffee-sold-counter').html(currentNum);
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
});