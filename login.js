const usuarios = [
    { usuario: "admin", contrasena: "admin" },
    { usuario: "usuario2", contrasena: "password2" },
    { usuario: "usuario3", contrasena: "password3" }
];

function validarLogin(event) {
    event.preventDefault();

    const usuarioIngresado = document.getElementById('Usuario').value;
    const contrasenaIngresada = document.getElementById('contrasena').value;


    const usuarioValido = usuarios.find(u => u.usuario === usuarioIngresado && u.contrasena === contrasenaIngresada);

    if (usuarioValido) {
        window.location.href = "validacion.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}
