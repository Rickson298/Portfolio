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
  sr.reveal("#texto", { delay: 800 });
  sr.reveal(".icon2", { delay: 800 });
  sr.reveal(".projeto", { delay: 400 });
  sr.reveal("", { delay: 400 });
  sr.reveal(".bloco-apresentacao", { delay: 400 });
  //Sobre mim delay
  sr.reveal(".imagem-delay", {});
  sr.reveal(".titulo-delay", { delay: 200 });
  sr.reveal(".descricao-delay", { delay: 400 });
  sr.reveal(".cards-interval", { interval: 400 });

   