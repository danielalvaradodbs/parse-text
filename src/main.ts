import './style.css';
import { write } from "./parseText";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>ParseText</h1>
    <input type="text" id="text" placeholder="Ingresa el texto">
    <div>
        <h3>Texto parseado</h3>
        <span id="textParsed">
        </span>
    </div>
  <div>
  <br>
  <button id="buttonCopy">Copiar</button>
  <button id="buttonReset">Limpiar</button>

  <div id="snackbar">Texto copiado a portapapeles!</div>
`;

const textInput = document.querySelector<HTMLInputElement>('#text')!;
const textToParsed = document.querySelector<HTMLSpanElement>('#textParsed')!;
const buttonCopy = document.querySelector<HTMLButtonElement>('#buttonCopy')!;
const buttonReset = document.querySelector<HTMLButtonElement>('#buttonReset')!;

textInput.addEventListener('input', () => {
  write(textInput, textToParsed)
});

buttonCopy.addEventListener('click', () => {
  const textToCopy = textToParsed.innerText;
  const toast = document.getElementById("snackbar")!;
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      toast.className = "show";
      setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000);
    })
    .catch((err) => {
      console.error('Error al copiar al portapapeles:', err);
    });

});
buttonReset.addEventListener('click', () => {

  textInput.value = '';
  textToParsed.innerHTML = '';

});