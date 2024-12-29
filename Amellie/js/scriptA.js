
window.addEventListener("scroll", function(){
	let header = document.querySelector('#header');
	header.classList.toggle('rolagem', window.scrollY > 0);

	
}); /* Scroll da pagina, ao carregar descer e mudar de cor*/

/* ao ir na pagina de login e clicar em registrar e logar, alterar entre os dois */
const container = document.querySelector('#container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
	container.classList.add('active');
});
loginBtn.addEventListener('click', () => {
	container.classList.remove('active');
}); 



