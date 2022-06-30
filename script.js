document.querySelectorAll('.menu').forEach(btn => 
    btn.addEventListener('click', () => btn.classList.toggle('active'))
);