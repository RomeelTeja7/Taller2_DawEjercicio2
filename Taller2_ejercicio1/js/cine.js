var Pelis = {
    "Peliculas": [
    {"imagen" : "img/Venom.jpg",
    "nombre" : "VENOM: Let There Be Carnage",
    "tiempo" : "132 min",
    "clasificacion" : "A",
    "butaca" : "Tradicional o Cuero",
    "formato": "(RealD 3D, 2D, DOB) │ ",
    "horario1": "10:00 a.m",
    "horario2": "11:00 a.m",
    "horario3": "15:00 p.m",
    "horario4": "19:00 p.m",
    "horario5": "22:00 p.m"
},

    {"imagen" : "img/Spidy.jpg",
    "nombre" : "Spider-Man: No Way Home",
    "tiempo" : "210 min",
    "clasificacion" : "B",
    "butaca" : "Tradicional o Cuero",
    "formato": "(RealD 3D, 2D, DOB) │ ",
    "horario1": "10:00 a.m",
    "horario2": "11:00 a.m",
    "horario3": "15:00 p.m",
    "horario4": "19:00 p.m",
    "horario5": "22:00 p.m"
},

    {"imagen" : "img/Eternals.jpg",
    "nombre" : "ETERNALS",
    "tiempo" : "220 min",
    "clasificacion" : "C",
    "butaca" : "Tradicional o Cuero",
    "formato": "(RealD 3D, 2D, DOB) │ ",
    "horario1": "10:00 a.m",
    "horario2": "11:00 a.m",
    "horario3": "15:00 p.m",
    "horario4": "19:00 p.m",
    "horario5": "22:00 p.m"
},
]};


   var div = document.getElementById("CineBosco");
   div.innerHTML = CineDatos(Pelis.Peliculas);
   function CineDatos(datos){
    var total = datos.length;
    data = "<ul class=\"grid\">\n";
    for(var i=0; i<total; i++){

    data += "<div class=\"unido\">\n";

    data += "<div class=\"movie-cover1\"/>\n";
    data += "<img src=\"" + datos[i].imagen + "\" alt=\" " + "\" class=\"\" />\n";
    
    data += "</div>\n";
    data += "<div class=\"box-movie-format\">\n";
    data += "<p>\n " + datos[i].nombre + "\n</p>\n";
    data += "<p>Clasificación: " + datos[i].clasificacion +" - Duracion de la pelicula: "+datos[i].tiempo+"</p>";
    data += "<div class=\"movie-format\">\n";
    data += "<div class=\"movie-seats\">\n";
    data += "</span>\n";
    data += "</span>\n";
    data += "</div>\n";

    data += "<p>Formato de pelicula: " + datos[i].formato + " Butaca: "+datos[i].butaca+"</p>";
    data += "<div class=\"movie-times\">";
    data += "</div>\n";
    data += "</span>\n";
    data += "</div>\n";
 
    data += "<p>Horarios: "+"</p>";
    data += "<button class=\"btn-btn-buy\">"+ datos[i].horario1+"</button>";
    data += "<button class=\"btn-btn-buy\">"+ datos[i].horario2+"</button>";
    data += "<button class=\"btn-btn-buy\">"+ datos[i].horario3+"</button>";
    data += "<button class=\"btn-btn-buy\">"+ datos[i].horario4+"</button>";
    data += "<button class=\"btn-btn-buy\">"+ datos[i].horario5+"</button>";

    data += "</div>\n";
    data += "</div>\n";
    }
    data += "</ul>\n";
    return data;
   }
