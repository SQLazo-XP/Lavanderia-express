const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if(nombre === "" || email === "" || asunto === "" || mensaje === ""){
        event.preventDefault();
        alert("Por favor complete todos los campos.");
        return;
    }

    alert("Solicitud enviada correctamente.");
});
