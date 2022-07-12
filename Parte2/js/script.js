

let minu = document.getElementById(btn_mayusculas);
let perro = document.getElementById(btn_añoshumano);
let pokemon = document.getElementById(btn_muestra);

minu.addEventListener("click",conver1);
perro.addEventListener("click",conver2);
pokemon.addEventListener("click",conver3);
/* Parte 1*/ 

function conver1(event){
  event.preventDefault();

  let letras = document.getElementById("txt_may").value;
  letras.toLowerCase();

}
//Parte 2
function conver2(event){
  event.preventDefault();

  let anios = document.getElementById(value);
  const v = Math.floor(anios);
  let result = ;
}

//Parte 3
function pokemon(nombre, especie, ataque, defensa){
  this.nombre = nombre;
  this.especie = especie;
  this.ataque = ataque;
  this.defensa = defensa;
}

var poke1 = new pokemon('Agumon', 'Fuego', 2000, 550);
var poke2 = new pokemon('Mago oscuro', 'dark', 8200, 8150);

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */


      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */



      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
    
    
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */