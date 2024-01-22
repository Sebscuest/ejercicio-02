'use strict'

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];
let newName= prompt("Ingrese Nombre");
if (students.find( students => students === newName ))
  alert("Si, se encuentra " + newName);
  else{
    alert("No, se encuentra " + newName);
  }
  




