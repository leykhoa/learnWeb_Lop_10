let name1 = document.getElementById('name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let birth = document.getElementById('birth');
let age = document.getElementById('age');
let error = document.querySelector('.error');

function handleSubmit() {
	if (name1.value.length < 5 || name1.value.length > 15) {
		alert('Please enter name >5 characters and < 15 charcters');
	}
}

function handleClick() {
	alert('click');
}

const button = document.getElementById('click');

button.addEventListener('click', function handleClick() {
	alert('click 2');
});

function handleOnChange() {
	if (name1.value.length < 5 || name1.value.length > 15) {
		error.style.color = 'red';
		error.innerHTML = 'Please inter name >5 characters and < 15 charcters';
	} else {
		error.innerHTML = '';
	}
}
