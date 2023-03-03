/*
var hotel = {
    name: "Barceló",
    location: "Chiclana",
    img: "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/spain/andalucia/cadiz/novo-sancti-petri/carrusel/RHSANC_POOL_29.jpg.bhgimg.optm1100.jpg/1604686168341.jpg",
};

document.getElementById("name-hotel").innerHTML = "Hotel " + hotel.name;
document.getElementById("location-hotel").innerHTML = "Localizado en " + hotel.location;
document.getElementById("img-hotel").src = hotel.img;

var rating = prompt("Puntuación: del 1 a 5");

document.getElementById("rating").innerHTML = rating + " estrellas";

var anonymous = confirm("¿Quiere que la reseña sea anónima?");

document.getElementById("anonymous").checked = anonymous;

https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ac/91/83/facade-daylight.jpg?w=700&h=-1&s=1
*/

var hoteles = {
    Barceló: {
        name: "Barceló",
        location: "Chiclana",
        img: "https://static.barcelo.com/content/dam/bhg/master/es/hoteles/spain/andalucia/cadiz/novo-sancti-petri/carrusel/RHSANC_POOL_29.jpg.bhgimg.optm1100.jpg/1604686168341.jpg",
    },
    Palace: {
        name: "Palace Hotel",
        location: "Madrid",
        img:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/ac/91/83/facade-daylight.jpg?w=700&h=-1&s=1",
    },
};

var selectedHotel = promt("Indique hotel sobre el que quiere hacer la reseña: Barceló o Palace");