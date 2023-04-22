var randomnumber = Math.floor(Math.random()*4)+1;
var randomimage1 = "pic" + randomnumber +".jpg";
var randomimagesrc1 = "public/images/" + randomimage1;
document.querySelector(".randomimage ").setAttribute("src",randomimagesrc1);