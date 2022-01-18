import { Injectable } from "@angular/core";

@Injectable()
export class VideojuegosService{

  private videojuegos: Videojuego[] = [
    {
      nombre: 'Fornite',
      descripcion: 'Es un juego de tipo batalla real en el que compiten hasta cien jugadores en solitario o en escuadrones de dos o cuatro miembros. Los jugadores saltan de un autobús que cruza el mapa en el momento que deseen, y empiezan sin armas.',
      img: 'assets/img/ps4/fortnite.jpg',
      lanzamiento: '2017',
      consola: 'PS4'

    },
    {
      nombre: 'GTA v',
      descripcion: 'Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​',
      img: 'assets/img/xbox/gta.jpg',
      lanzamiento: '2019',
      consola: 'xbox'

    },
    {
      nombre: 'assassins creed',
      descripcion: 'Assassins Creed es un galardonado videojuego de ficción histórica en tercera persona, de sigilo, acción, aventura y mundo abierto desarrollado por Ubisoft Montreal para Microsoft Windows, PlayStation 3 y Xbox 360.',
      img: 'assets/img/xbox/assa.jpg',
      lanzamiento: '2007',
      consola: 'xbox'

    },
    {
      nombre: 'god of war ',
      descripcion: 'El juego narra las aventuras de Kratos, un general espartano al servicio de los dioses de la mitología griega. ... Sin embargo, en este caso la hibris de Kratos no sólo no es castigada, sino que le supone una victoria y destino mayor del que él mismo había concebido.',
      img: 'assets/img/ps4/god.jpg',
      lanzamiento: '2016',
      consola: 'PS4'

    },
    {
      nombre: 'FIFA 22',
      descripcion: 'FIFA 22 es un videojuego de fútbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. ... El primer tráiler del juego fue presentado el día 11 de julio de 2021​ y muestra la nueva tecnología Hypermotion, que según palabras de EA brindará nueva experiencia más realista.',
      img: 'assets/img/ps4/fifa.jpg',
      lanzamiento: '2021',
      consola: 'PS4'

    },
    {
      nombre: 'Gears of War',
      descripcion: 'Gears of War es una serie de videojuegos y de cómics del género shooter en tercera persona y acción-aventura, desarrollada por Epic Games y The Coalition. Los seis juegos que actualmente integran la serie tienen lugar en el planeta ficticio Sera y se centran en una guerra entre humanos y unas criaturas conocidas como Locust. En Gears of War, el protagonista es Marcus Fenix, un soldado o «Gear» en la Coalición de Gobiernos Ordenados, lleva a su equipo en una misión para instalar la bomba de masa ligera y destruir a la horda de Locust en sus fortalezas subterráneas.',
      img: 'assets/img/xbox/gears.jpeg',
      lanzamiento: '2014',
      consola: 'xbox'

    },
    {
      nombre: 'Destiny',
      descripcion: 'Destiny es la nueva propuesta de Bungie Software y Activision para PlayStation 4. Se trata de un título de acción y aventura en el que el jugador debe crear su propio personaje y evolucionarlo para lograr salvar la tierra.',
      img: 'assets/img/ps4/dest.png',
      lanzamiento: '2015',
      consola: 'PS4'

    },
    {
      nombre: 'Hitman',
      descripcion: 'La trama de los videojuegos gira en torno a un hombre llamado Agente 47 (o simplemente «47»), que es el producto de experimentos de mejoras genéticas y creación de superhombres, especialmente diseñado para asesinar cuando se lo contrata.',
        img: 'assets/img/ps4/hit.jpeg',
      lanzamiento: '2015',
      consola: 'PS4'

    },
    {
      nombre: 'Tomb Raider',
      descripcion: 'Tomb Raider es una franquicia de medios, que incluye una serie de videojuegos, historietas, películas y serie anime que giran alrededor de las aventuras de la arqueóloga británica Lara Croft. Desde la publicación del primer juego en el año 1996 de la mano de las empresas Core Design y Eidos Interactive, la popularidad de la protagonista fue incrementándose notablemente, siendo reconocida en el año 2006 por el Libro Guinness de los récords como la "Heroína humana más exitosa de los videojuegos".',
      img: 'assets/img/ps4/tom.jpg',
      lanzamiento: '2015',
      consola: 'PS4'

    },
    {
      nombre: 'Halo',
      descripcion: 'Halo es una franquicia de videojuegos de ciencia ficción creada y desarrollada por Bungie Studios hasta Halo: Reach, y gestionada ahora por 343 Industries, propiedad de Microsoft Studios. La serie se centra en una guerra interestelar entre la humanidad y una alianza teocrática de alienígenas conocidos como Covenant.',
      img: 'assets/img/xbox/halo.png',
      lanzamiento: '2001',
      consola: 'xbox'

    },
  ];

  constructor(){
    console.log('Servicio listo para usarce.');
  }

getVideojuegos(): Videojuego[] {
  return this.videojuegos;
}

getVideojuego(idx: number) {
  return this.videojuegos[idx];
}

buscarVideojuegos(termino: string): Videojuego[] {
  let videojuegosArr: Videojuego[] = [];

  termino = termino.toLowerCase();

  for(let videojuego of this.videojuegos){
    let nombre = videojuego.nombre.toLowerCase();
    if (nombre.indexOf( termino ) >= 0){
      videojuegosArr.push( videojuego );
    }
  }

  return videojuegosArr;
}


}
export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}

