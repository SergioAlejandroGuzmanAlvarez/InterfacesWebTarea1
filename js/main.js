function validarUsuario(){
    const user = document.getElementById("usuario").value;
    const pass = document.getElementById("contraseña").value;

    if(user=="usuario1" && pass=="12345"){
        window.location.href="paneladmin.html"
    }
    if(user=="usuario2" && pass=="12345"){
        window.location.href="perfil.html"
    }
    if(user=="" && pass==""){
        alert("Ingresa datos")
        return;
    }
}