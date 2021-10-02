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
  sr.reveal("", { delay: 200 });
  sr.reveal(".descricao-delay", { delay: 400 });
  sr.reveal(".card", { interval: 400 });

const toggle = document.getElementById('toggle');
toggle.onclick = ()=>{
    toggle.classList.toggle('active')
}

document.querySelector('.voltar').addEventListener('click' , ()=>{
    window.scrollTo(0,0)
   
})

function voltarSumir(){
    if(window.scrollTo(0.0)){
        document.querySelector('.voltar').style.opacity = '0'

    }
}






document.getElementById('toggle').addEventListener('click' , ()=>{
    if(document.querySelector('.menu-phone').style.height == "100vh"){
        document.querySelector('.menu-phone').style.height = "0vh"
        document.querySelector('.menu-phone ul').style.display = "none"
        document.querySelector('header').style.backgroundColor = "rgba(0, 0, 0, 0.3)"
        
       
    
        
    }else{
        document.querySelector('.menu-phone').style.height = "100vh"
        document.querySelector('.menu-phone').style.position = "fixed"
       document.querySelector('header').style.backgroundColor = "black"
        document.querySelector('.menu-phone ul').style.display = "flex"
    }
});

function fechar(){
    toggle.classList.remove('active')    
    document.querySelector('.menu-phone').style.height = "0vh"
        document.querySelector('.menu-phone ul').style.display = "none"
       

}
