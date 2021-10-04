function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(()=>elemento.innerHTML += letra, 100 * i)
        
    });
}

const titulo = document.querySelector('.animacao-pisca');
typeWriter(titulo);

const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
    reset: true,
  });
  
//Função de scroll reveral 

sr.reveal("#texto", { delay: 400 });
sr.reveal(".icon2", { delay: 400 });
sr.reveal(".projeto", { delay: 400 });
sr.reveal(".bloco-apresentacao", { delay: 200 });
sr.reveal(".card", { interval: 400 });


// Função para fazer o toggle alterar a forma, de ativado para desativado e vice-versa

const toggle = document.getElementById('toggle');
toggle.onclick = ()=>{
    toggle.classList.toggle('active')
}

//Função e animação para fazer a pagina subir ao clicar no botão

function SubirPagina(){
    window.scrollTo(0,0)
    document.querySelector('.voltar').style.width = '40px'
    document.querySelector('.voltar').style.height = '100px'
    document.querySelector('.voltar img').style.top = '20px'

    setTimeout( ()=>{
        document.querySelector('.voltar').style.height = '50px'
        document.querySelector('.voltar').style.width = '50px'
        document.querySelector('.voltar').style.borderRadius = '15px'
        document.querySelector('.voltar img').style.top = ''
    }, 400)

}


//Função para abrir e fechar o menu mobile

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
