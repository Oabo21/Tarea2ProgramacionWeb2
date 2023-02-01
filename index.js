
//Se crea la clase "pelicula" para agregar peliculas.
class Pelicula {
  constructor() {
    this.peliculas= [
      {
        titulo: 'Batman',
        duracion: '1h 50m',
        descripcion: 'Pelicula de superheroes',
        clasificacion: 'C',
        anio: 2022
      },
      {
        titulo: 'Superman',
        duracion: '1h 50m',
        descripcion: 'pelicula de superheroes',
        clasificacion: 'C',
        anio: 2022
      },
    ];
  }
//Se crea el metodo "agregar pelicula" para agregar titulo, duracion
//descripcion, clasificacion y año de la pelicula.
  agregarPelicula(titulo, duracion, descripcion, clasificacion, anio) {
    this.peliculas.push({
      titulo: titulo,
      duracion: duracion,
      descripcion: descripcion,
      clasificacion: clasificacion,
      anio: anio
    });
  }

 //Se crea el metodo "ver pelicula" para solicitar la informacion de la
 //pelicula por medio del titulo/nombre.
  verPelicula(titulo) {
    for (let i = 0; i < this.peliculas.length; i++) {
      if (titulo === this.peliculas[i].titulo) {
        return this.peliculas[i];
      }
    }

    return null;
  }

  verPeliculas() {
    return this.peliculas;
  }

//Se crea el metodo "borrar pelicula" para eliminar registro de cualquier
//pelicula ingresada.
  borrarPelicula(titulo) {
    const peliculasTemporal = [];
    for (let i = 0; i < this.peliculas.length; i++) {
      if (titulo !== this.peliculas[i].titulo) {
        peliculasTemporal.push(this.peliculas[i]);
      }
    }

    this.peliculas = peliculasTemporal;
  }
}

//Se repite el mismo proceso que la clase "pelicula" en las categorias
//libro y personas.
class Libro {
  constructor() {
    this.libros = [
      {
        titulo: 'Don Quijote de la Mancha',
        paginas: '400',
        descripcion: 'novela clasica',
        clasificacion: 'fantastico',
      },
    ];
  }

  agregarLibro(titulo, paginas, descripcion, clasificacion) {
    this.libros.push({
      titulo: titulo,
      paginas: paginas,
      descripcion: descripcion,
      clasificacion: clasificacion,
    });
  }

  verLibro(titulo) {
    for (let i = 0; i < this.libros.length; i++) {
      if (titulo === this.libros[i].titulo) {
        return this.libros[i];
      }
    }

    return null;
  }

  borrarLibro(titulo) {
    const librosTemporal = [];
    for (let i = 0; i < this.libros.length; i++) {
      if (titulo !== this.libros[i].titulo) {
        librosTemporal.push(this.libros[i]);
      }
    }

    this.libros = librosTemporal;
  }  
  
}

class Persona {
  constructor() {
  this.personas= [
    {
      nombre: 'Orlando',
      edad: '22',
      descripcion: 'Masculino',
      nacionalidad: 'Hondureño',
    },
  ];
}

agregarPersona(nombre, edad, sexo, nacionalidad) {
  this.personas.push({
    nombre: nombre,
    nacionalidad: nacionalidad,
    sexo: sexo,
    edad: edad,
  });
}

verPersona(nombre) {
  for (let i = 0; i < this.personas.length; i++) {
    if (nombre === this.personas[i].nombre) {
      return this.personas[i];
    }
  }

  return null;
}

borrarPersona(nombre) {
  const personasTemporal = [];
  for (let i = 0; i < this.personas.length; i++) {
    if (nombre !== this.personas[i].nombre) {
      personasTemporal.push(this.personas[i]);
    }
  }

  this.personas = personasTemporal;
  } 
}

const pelicula = new Pelicula();
const libro = new Libro();
const persona = new Persona();

//Se crean las funciones por medio de un boton para cada campo que se quiera
//agregar en la pagina, esto se repite para las categorias de libros y personas.
function agregarPelicula() {
  let titulo = document.getElementById('titulo').value;
  let duracion = document.getElementById('duracion').value;
  let descripcion = document.getElementById('descripcion').value;
  let clasificacion = document.getElementById('clasificacion').value;
  let anio = document.getElementById('anio').value;
  pelicula.agregarPelicula(titulo, duracion, descripcion, clasificacion, anio);
  document.getElementById('titulo').value = '';
  document.getElementById('duracion').value = '';
  document.getElementById('descripcion').value = '';
  document.getElementById('clasificacion').value = '';
  document.getElementById('anio').value = '';
}

function verPelicula() {
  const titulo = document.getElementById('ver-pelicula').value;
  const peliculaEncontrada = pelicula.verPelicula(titulo);
  if (peliculaEncontrada) {
    document.getElementById('titulo-encontrado').innerHTML = peliculaEncontrada.titulo;
    document.getElementById('descripcion-encontrada').innerHTML = peliculaEncontrada.descripcion;
    document.getElementById('anio-encontrado').innerHTML = peliculaEncontrada.anio;
    document.getElementById('duracion-encontrada').innerHTML = peliculaEncontrada.duracion;
    document.getElementById('clasificacion-encontrada').innerHTML = peliculaEncontrada.clasificacion;
  } else {
    document.getElementById('titulo-encontrado').innerHTML = '';
    document.getElementById('descripcion-encontrada').innerHTML = '';
    document.getElementById('anio-encontrado').innerHTML = '';
    document.getElementById('duracion-encontrada').innerHTML = '';
    document.getElementById('clasificacion-encontrada').innerHTML = '';
  }
}

function borrarPelicula() {
  const titulo = document.getElementById('titulo-pelicula-borrar').value;
  pelicula.borrarPelicula(titulo);
  document.getElementById('titulo-pelicula-borrar').value = '';
}

function agregarPersona() {
  const nombre = document.getElementById("nombre-persona").value
  const edad = document.getElementById("edad").value
  const sexo = document.getElementById("sexo").value
  const nacionalidad = document.getElementById("nacionalidad").value
  persona.agregarPersona(nombre,edad,sexo,nacionalidad)
}

function verPersona() {
  const nombre = document.getElementById("ver-persona").value
  const personaEncontrada = persona.verPersona(nombre);
  if (personaEncontrada){
    document.getElementById("nombre-persona-encontrado").innerHTML = personaEncontrada.nombre
    document.getElementById("edad-encontrada").innerHTML = personaEncontrada.edad
    document.getElementById("sexo-encontrado").innerHTML = personaEncontrada.sexo
    document.getElementById("nacionalidad-encontrada").innerHTML = personaEncontrada.nacionalidad
  }else{
    document.getElementById("nombre-persona-encontrado").innerHTML = ""
    document.getElementById("edad-encontrada").innerHTML = ""
    document.getElementById("sexo-encontrado").innerHTML = ""
    document.getElementById("nacionalidad-encontrada").innerHTML = ""
  }
}

function borrarPersona() {
  const nombre = document.getElementById("nombre-persona-borrar").value
  persona.borrarPersona(nombre);
  document.getElementById('nombre-persona-borrar').value = '';
}

function agregarLibro() {
  const titulo = document.getElementById("titulo-libro").value
  const paginas = document.getElementById("paginas-libro").value
  const descripcion = document.getElementById("descripcion-libro").value
  const clasificacion = document.getElementById("clasificacion-libro").value
  libro.agregarLibro(titulo,paginas,descripcion,clasificacion)
}

function verLibro() {
  const titulo = document.getElementById("ver-libro").value
  const libroEncontrado = libro.verLibro(titulo);
  if (libroEncontrado){
    document.getElementById("titulo-libro-encontrado").innerHTML = libroEncontrado.titulo
    document.getElementById("descripcion-libro-encontrada").innerHTML = libroEncontrado.descripcion
    document.getElementById("paginas-libro-encontradas").innerHTML = libroEncontrado.paginas
    document.getElementById("clasificacion-libro-encontrada").innerHTML = libroEncontrado.clasificacion
  } else {
    document.getElementById("titulo-libro-encontrado").innerHTML = ""
    document.getElementById("descripcion-libro-encontrada").innerHTML = ""
    document.getElementById("paginas-libro-encontradas").innerHTML = ""
    document.getElementById("clasificacion-libro-encontrada").innerHTML = ""
  }
}

function borrarLibro() {
  const titulo = document.getElementById('titulo-libro-borrar').value
  libro.borrarLibro(titulo);
  document.getElementById('titulo-libro-borrar').value = '';
}