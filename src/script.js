const text = "Pedro Wictor";
let index = 0;

function typeText() {
  const typingElement = document.getElementById("typing-text");
  
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 200); // Velocidade da digitação
  }
}

document.addEventListener("DOMContentLoaded", typeText);



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      const offset = 50;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
  
      // Adiciona uma classe para o efeito de fade-in
      target.classList.add('fade-in');
    });
  });








  
     