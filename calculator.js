function updatePrice(price) {
  $('.bc-js-price').text(price);
}

// Returns the calculated price.
function calculatePrice() {
  let price = 0;

  let currentSR = $('.bc-js-current-sr').val();
  let desiredSR = $('.bc-js-desired-sr').val();

  if (currentSR && desiredSR && Number(currentSR) && Number(desiredSR)) {
    currentSR = parseFloat(currentSR);
    desiredSR = parseFloat(desiredSR);

    if (currentSR < desiredSR) {
      // This is where we calculate how much the service will cost.
      price = desiredSR - currentSR;

      if ($('.bc-js-specific-champs').is(':checked')) {
        // This is when the checkbox for specific champs is checked.
        // Currently it just adds 5 dollars.
        price += 5;
      }
    }
  }

  updatePrice(price);
}

$(document).ready(function() {
  // Listen to the user's input on the keys.
  $('.bc-js-current-sr, .bc-js-desired-sr').keyup(function() {
    calculatePrice();
  });

  // Listen to the user checking the checkbox.
  $('.bc-js-specific-champs').change(function() {
    calculatePrice();
  })
})