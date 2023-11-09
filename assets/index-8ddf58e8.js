(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=o=>o?o.replace(/\s/g,"-").normalize("NFD").replace(/[^\w\s-]/g,"").toLowerCase().trim():"",d=(o,r)=>{const n=u(o.value);r.textContent=n};document.querySelector("#app").innerHTML=`
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
`;const c=document.querySelector("#text"),i=document.querySelector("#textParsed"),l=document.querySelector("#buttonCopy"),p=document.querySelector("#buttonReset");c.addEventListener("input",()=>{d(c,i)});l.addEventListener("click",()=>{const o=i.innerText,r=document.getElementById("snackbar");navigator.clipboard.writeText(o).then(()=>{r.className="show",setTimeout(function(){r.className=r.className.replace("show","")},3e3)}).catch(n=>{console.error("Error al copiar al portapapeles:",n)})});p.addEventListener("click",()=>{c.value="",i.innerHTML=""});
