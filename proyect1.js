var objeto1 = { b:2, c:3,a: 1 };
var objeto2 = {c:"Gogle",a:"Apple",b:"Microsoft"};
var objeto3 = {key1:"true",key3:"undefined",key2:"false"};
var objetoA = {};
var objetoB=[];
var objetoC=[];


function orden(objeto) {
for (var llave of Object.keys(objeto).sort())
{
    objetoA[llave]=objeto[llave];
}
objetoB=Object.keys(objetoA);
objetoC=Object.values(objetoA);
return{
    objetoA ,objetoB, objetoC
}
 }

 console.log(objeto1)
 console.log(orden(objeto1).objetoA);
 console.log(orden(objeto1).objetoB,orden(objeto1).objetoC);
 objetoA={};
  objetoB=[]; 
  objetoC=[];
 
console.log(objeto2)
console.log(orden(objeto2).objetoA);
console.log(orden(objeto2).objetoB,orden(objeto2).objetoC);
objetoA={};
 objetoB=[]; 
 objetoC=[];


console.log(objeto3);
console.log(orden(objeto3).objetoA);
console.log(orden(objeto3).objetoB,orden(objeto3).objetoC);
