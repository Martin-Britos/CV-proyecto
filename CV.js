document.getElementById('boton').onclick=function() {
    console.log("capturamos evento")
    document.getElementById("demo").innerHTML="El CV ha sido visualizado correctamente";
 }
 document.getElementById('boton').addEventListener('click',function() {
    console.log("capturamos evento")
    document.getElementById("demo").style.color='red'
})
const miTitulo = document.querySelector('h1');
miTitulo.textContent = 'Curriculum Vitae';
