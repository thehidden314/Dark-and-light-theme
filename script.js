const idThemeClair = document.getElementById('idclair')
const themeSombre = document.querySelector('.sombre')
const themeClair = document.querySelector('.clair')
const idThemeSombre = document.getElementById('idsombre')
const idClassContainer = document.getElementById('idContainer')

idThemeClair.addEventListener('click', ()=>{
    themeClair.style.display = 'none';
    idClassContainer.classList.remove('themeSombre')
    themeSombre.style.display = 'block';

})
idThemeSombre.addEventListener('click', ()=>{
    themeSombre.style.display = 'none';
    idClassContainer.classList.add('themeSombre')
    themeClair.style.display = 'block';
})

