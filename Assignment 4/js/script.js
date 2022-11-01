function handleClickMenu() {
	const btn = document.querySelector('.btn-menu');
	const menu = document.getElementById('menu-ul');
	if (menu.style.display === 'none') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
}

document.addEventListener('click', (event) => {
	const menu = document.getElementById('menu-ul');
	const main = document.querySelector('main');
	console.log(event.target === main);
	console.log(menu.style.display);
	if (event.target === main && menu.style.display !== 'none') {
		menu.style.display = 'none';
	}
});
