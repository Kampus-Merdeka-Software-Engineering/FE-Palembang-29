// Get the pop-up and buttons
const popup = document.getElementById("popup");
const showPopupButton = document.getElementById("showPopupButton");
const closePopupButton = document.getElementById("closePopupButton");

// Show the pop-up when the button is clicked
showPopupButton.addEventListener("click", function() {
    popup.classList.add("popup-show");
});

// Close the pop-up when the close button is clicked
closePopupButton.addEventListener("click", function() {
    popup.classList.remove("popup-show");
});
