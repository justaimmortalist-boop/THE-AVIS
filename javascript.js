const images = document.getElementsByClassName("process-image");

let imageNumber = 0;


function nextImage () {

imageNumber++;

if (imageNumber > 5) imageNumber = 0;

images[imageNumber].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest" });

};


const carousel = document.getElementById("ima