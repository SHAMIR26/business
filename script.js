const reviews = [

    "★★★★★ Luxury at its finest!",

    "★★★★★ Beautiful resort with peaceful surroundings.",

    "★★★★★ Excellent hospitality and premium residences.",

    "★★★★★ Perfect place for family vacation."

];

let index = 0;
const reviewElement = document.getElementById("review");

if (reviewElement) {

    setInterval(() => {

        index = (index + 1) % reviews.length;

        reviewElement.textContent = reviews[index];

    }, 3000);

}

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your booking request has been submitted.");

        this.reset();

    });

}