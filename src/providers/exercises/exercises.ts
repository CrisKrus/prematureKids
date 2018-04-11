import {Injectable} from '@angular/core';

@Injectable()
export class ExercisesProvider {
  private mockExercises =
    {
      "001": {
        id: "001",
        title: "Desarrollo sensoriomotriz",
        description: "Ofrecer al bebé distintos puntos de vista, para eso, coloque al bebé en diferentes posiciones de lado, boca arriba, boca abajo o hacia arriba, y mostrarle juguetes de diferentes colores, formas, que sean sonoros, todo esto para procurar que sus periodos de atención sean cada vez mayor. \n\n Colocando al bebé en posición de acostado, vamos a colocar nuestras manos detrás de la espalda del bebé y lo vamos a elevar procurado que sostenga su cabeza por unos segundos, así de esta manera y realizando este ejercicio de una manera regular, poco a poco irá adquiriendo la fuerza necesaria para poder sostener la cabeza él solito durante un tiempo prolongado. \n\n Realizar movimientos en los brazos y piernas del bebé, moverlos hacia arriba y hacia abajo, abrirlos y cerrarlos, de igual manera hacerlo con sus piernas y complementar el ejercicio doblándolas y estirándolas con cuidado. ",
        time: "30",
        age: "0-3"
      },
      "002": {
        id:"002",
        title: "Desarrollo Cognitivo",
        description: "Vamos a colocar a nuestro bebé en posición de tumbado boca arriba y le vamos a mostrar juguetes sonoros, o cascabeles, algún juguete que emita algún sonido, etc. \n\n Contar cuentos utilizando distintos tonos y realizando onomatopeyas de animales, o distintos volúmenes de voz. \n\n Poner música para relajar el bebé o bien para activarlo, dependiendo del tipo de música que elijas y el momento del día. La estimulación musical es muy importante para el desarrollo posterior del bebé.",
        time: "45",
        age: "0-3"
      },
      "003": {
        id:"003",
        title: "Desarrollo del lenguaje",
        description: "Repita cada sonido, balbuceo, gorjeo que realice el bebé, aunque solo sean ruidos vocálicos. Así irá comprendiendo que esa es una forma de comunicarse \n\n En frente del bebé realice gestos con la boca, los ojos, la nariz o las cejas, para que vaya conociendo las expresiones del rostro, por ejemplo abrir y cerrar la boca, sacar y entrar la lengua, subir y bajar las cejas, inflar las mejillas, abrir y cerrar los ojos etc. Y cantar…..cantar mucho.",
        time: "20",
        age: "0-3"
      },
      "004": {
        id:"004",
        title: "Desarrollo emocional/afectivo",
        description: "Los papás toman el bebé contra su pecho y lo abrazan de manera que puedan cubrir su cuerpo, en la colchoneta los papás comienzan a rodar de lado abrazando a su hijo. \n\n Baile con su hijo y exprésele sus sentimientos hacia él, mírelo a los ojos, llámelo por su nombre y sonríale. \n\n A medida que el bebé vaya creciendo habrá que ir introduciendo nuevos ejercicios, en cada una de las áreas e ir adaptándolos a su propio ritmo, no hay que olvidar que cada bebé tiene su propio ritmo, y en el caso de los prematuros este ritmo será algo más lento.",
        time: "35",
        age: "0-3"
      },
      "005": {
        id:"005",
        title: "Ejercicio 5",
        description: "Este ejercicio constara del reposo del bebe sobre...",
        time: "30",
        age: "0-3"
      },
      "006": {
        id:"006",
        title: "Ejercico 6",
        description: "Este ejercicio constara del reposo del bebe sobre...",
        time: "30",
        age: "0-3"
      },
      "007": {
        id:"007",
        title: "Ejercico 7",
        description: "Este ejercicio constara del reposo del bebe sobre...",
        time: "30",
        age: "0-3"
      },
      "008": {
        id:"008",
        title: "Otro",
        description: "Este ejercicio constara del reposo del bebe sobre...",
        time: "30"
      }
    };

  constructor() {
  }

  getExercise(exercise: string) {
    return this.mockExercises[exercise];
  }


  getExercises() {
    return this.mockExercises;
  }
}
