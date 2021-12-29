const hamburgesa = document.querySelector('.menu-amburgesa');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(hamburgesa)

hamburgesa.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target !=menu && e.target != hamburgesa    ){
        menu.classList.toggle("spread")
    }
})