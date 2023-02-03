// // $.get('http://127.0.0.1:5000/amigos');
// $.get("http://127.0.0.1:5000/amigos", data){
//     data.forEach(objeto => {
//         let newLi = document.createElement("li");
//     })
// })
// unbind( "click" ).
let borroUnAmigo = false;
$("#boton").click(function (){
    $.get("http://127.0.0.1:5000/amigos", function(data){
        // console.log(data.length)
        let ul = document.getElementById('lista');
        if(data.length > ul.children.length){
            data.forEach(valor => {
                let newLi = document.createElement("li");
                newLi.innerText = valor.name;
                newLi.setAttribute('id', valor.id);
                ul.appendChild(newLi);
                document.querySelector('img').src = '';
            })
        }
        if(borroUnAmigo){
            location.reload();
        }
        borroUnAmigo = false;
    })
})
$("#search").click(function(){
    let inputValue = document.querySelector('#input').value;
    let span = document.getElementById('amigo');
    let busqueda;
    $.get(`http://127.0.0.1:5000/amigos/${inputValue}`, function(data){
        busqueda = data.name;
        span.innerHTML = busqueda;
    })
})
$("#delete").click(function(){
    let inputValue = document.querySelector("#inputDelete").value;
    let span = document.querySelector("#success");
    let amigoEliminado;
    // $.get(`http://127.0.0.1:5000/amigos/${inputValue}`, function(data){ 
    // })
    $.ajax(`http://127.0.0.1:5000/amigos/${inputValue}`, {type: "DELETE"});
    amigoEliminado = "El amigo ha sido eliminado CORRECTAMENTE";
    span.innerText = amigoEliminado;
    borroUnAmigo = true;
})