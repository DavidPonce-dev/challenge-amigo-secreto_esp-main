// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

const $listaAmigos = document.querySelector("#listaAmigos");
const $resultado = document.querySelector("#resultado");
const $inputAmigo = document.querySelector("#amigo");

let listaAmigos = [];

function mostrarAmigos() {
  $listaAmigos.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    const $li = document.createElement("li");
    $li.innerHTML = amigo;
    $listaAmigos.appendChild($li);
  });
}

function agregarAmigo() {
  const amigo = $inputAmigo.value;
  if (!amigo) {
    alert("Debes ingresar un nombre");
    return;
  }
  listaAmigos.push(amigo);
  $inputAmigo.value = "";
  mostrarAmigos();
}

function sortearAmigo() {
  if (listaAmigos.length < 1) return alert("Debes ingresar al menos un amigo");

  const seleccionado = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[seleccionado];
  $resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

  listaAmigos = [];
  mostrarAmigos();
}
