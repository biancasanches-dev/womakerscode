document.addEventListener('DOMContentLoaded', (event) => {
    const cursor = document.getElementById('cursor');

    function updateCursorPosition(event) {
        if (cursor) {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        cursor.style.background = `radial-gradient(600px at ${x}% ${y}%, rgba(29, 78, 216, 0.15), transparent 80%)`;
        }
    }
    document.addEventListener('mousemove', updateCursorPosition);

    
});


function mostrarDiv(componente) {

    const componentes = document.querySelectorAll('.component');
    componentes.forEach(comp => comp.classList.remove('selected'));
  
    const componenteSelecionado = document.getElementById(`componente-${componente}`);
    if (componenteSelecionado) {
      componenteSelecionado.classList.add('selected');
    }
  
    const divsInfo = document.querySelectorAll('.info');
    divsInfo.forEach(div => div.style.display = 'none');
  
    const divInfo = document.getElementById(`info-${componente}`);
    if (divInfo) {
      divInfo.style.display = 'block';
    }
}

mostrarDiv(1)

let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll(".my-slides");
 
  if (slides.length > 0) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";
  }

  setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    if (slideIndex > 1 || n > 0) {
        showSlides(slideIndex += n -1);
    }
}

showSlides();
