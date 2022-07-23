// ----------- declaring the constant variables
const submitButton = document.getElementById("submit");
const ratings = document.getElementById("rate");
const ratedNumber = document.querySelectorAll(".rating-number");
const ratingContainer = document.querySelector(".rating-container");
const thankContainer = document.querySelector(".thanks-container");

// ------------ declaring the variable 
let rated = 0;



//------------- getting the selected rate from the rating class
ratedNumber.forEach((rate) => {
    rate.addEventListener("click", activeLink)
})


//------------- displaying the thank-you container with the submit button on click event
submitButton.onclick = showRating;

// ------------- updating the active rating selected
function activeLink() {
    ratedNumber.forEach((number) =>
        number.classList.remove("active"))
    this.classList.add("active")
    rated = this.id;
}


function showRating() {
    // -- hidding the rating containner and displaying the thank you container
    ratingContainer.style.display = "none";
    thankContainer.style.display = "flex";

    ratings.innerText = rated;
}

