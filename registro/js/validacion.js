function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let enviar = document.getElementById("regBtn")

enviar.addEventListener("click",function() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const contraseña1 = document.getElementById("password1").value;
    const contraseña2 = document.getElementById("password2").value;
    const terminos = document.getElementById("terminos");

    if (
        nombre === "" || apellido === "" || email === "" ||
        contraseña1 !== contraseña2 || !terminos.checked || contraseña1.length < 6
      ) {
        showAlertError();
      } else {
        showAlertSuccess();
      }
    })

    