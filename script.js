function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(()=>elemento.innerHTML += letra, 100 * i)
        
    });
}

const titulo = document.querySelector('.efeito');
typeWriter(titulo);

const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
  });
  
  //Home delay
  sr.reveal("#texto", { delay: 400 });
  sr.reveal(".icon2", { delay: 400 });
  sr.reveal(".projeto", { delay: 400 });
  sr.reveal("", { delay: 400 });
  sr.reveal(".bloco-apresentacao", { delay: 200 });
  //Sobre mim delay
  sr.reveal(".imagem-delay", {});
  sr.reveal(".card", { delay: 200 });
  sr.reveal(".descricao-delay", { delay: 400 });
  sr.reveal(".cards-interval", { interval: 400 });

const toggle = document.getElementById('toggle');
toggle.onclick = ()=>{
    toggle.classList.toggle('active')
}

document.querySelectorAll('.projeto').addEventListener('click' , ()=>{
    window.navigator.vibrate(500)
})
