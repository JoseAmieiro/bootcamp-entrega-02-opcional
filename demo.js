var hoteles = {
    Barcelo: {
        name: "Barcelo",
        location: "Chiclana",
        img: "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/spain/andalucia/cadiz/novo-sancti-petri/carrusel/RHSANC_POOL_29.jpg.bhgimg.optm1100.jpg/1604686168341.jpg",
    },
    Palace: {
        name: "Palace Hotel",
        location: "Madrid",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ac/91/83/facade-daylight.jpg?w=700&h=-1&s=1",
    },
};

var selectedHotel = prompt("Indique hotel sobre el que quiere hacer la reseña: Barcelo o Palace");
console.log(selectedHotel);

document.getElementById("name-hotel").innerHTML =  "Hotel " + hoteles[selectedHotel].name;

document.getElementById("location-hotel").innerHTML = "Localizado en " + hoteles[selectedHotel].location;

document.getElementById("img-hotel").src = hoteles[selectedHotel].img;

var stars = {
    una:
      "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco:
      "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
  };

var rating = prompt("Puntuación: una, dos, tres, cuatro o cinco estrellas");
  
document.getElementById("rating").innerHTML = stars[rating];

var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonymous;