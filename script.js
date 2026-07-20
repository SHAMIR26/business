const reviews = [

"★★★★★ Luxury at its finest!",

"★★★★★ Beautiful resort with peaceful surroundings.",

"★★★★★ Excellent hospitality and premium residences.",

"★★★★★ Perfect place for family vacation."

];

let index = 0;

setInterval(()=>{

index++;

if(index>=reviews.length){

index=0;

}

document.getElementById("review").innerHTML=reviews[index];

},3000);

document.getElementById("bookingForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! Your booking request has been submitted.");

this.reset();

});