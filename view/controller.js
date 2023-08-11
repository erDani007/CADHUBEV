const noticias = document.querySelectorAll('.noticia');

// Agregar evento clic a cada noticia
noticias.forEach(noticia => {
  noticia.addEventListener('click', () => {
    // Obtener el enlace de la noticia seleccionada
    const enlace = noticia.querySelector('a').getAttribute('href');
    
    // Redirigir a la página de la noticia completa
    window.location.href = enlace;
  });
});