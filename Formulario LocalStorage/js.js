// Obtener el formulario y sus campos
const formularioContacto = document.getElementById('formularioContacto');
const inputNombre = document.getElementById('nombre');
const inputCorreo = document.getElementById('correo');
const inputMensaje = document.getElementById('mensaje');

// Manejar el evento de envío del formulario
formularioContacto.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario por defecto

  // Obtener los valores de los campos
  const nombre = inputNombre.value;
  const correo = inputCorreo.value;
  const mensaje = inputMensaje.value;

  // Crear un objeto con los datos del usuario
  const usuario = {
    nombre: nombre,
    correo: correo,
    mensaje: mensaje
  };

  // Convertir el objeto a JSON y guardarlo en Local Storage
  localStorage.setItem('usuarioContacto', JSON.stringify(usuario));

  // Mostrar el usuario en el DOM
  mostrarUsuario();
});

// Función para mostrar el usuario en el DOM
function mostrarUsuario() {
  const usuarioGuardado = localStorage.getItem('usuarioContacto');
  if (usuarioGuardado) {
    const usuario = JSON.parse(usuarioGuardado);
    const mensajeUsuario = `Nombre: ${usuario.nombre}, Correo: ${usuario.correo}, Mensaje: ${usuario.mensaje}`;
    document.getElementById('infoUsuario').textContent = mensajeUsuario;
  }
}

// Llamar a la función para mostrar el usuario al cargar la página
mostrarUsuario();

console.log(usuarioContacto)

