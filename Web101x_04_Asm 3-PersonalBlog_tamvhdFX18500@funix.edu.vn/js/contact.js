const submit = document.getElementById('submit');
const submitError = document.getElementById('error-submit');
submit.disabled = true;
submitError.innerHTML = 'Please fill out the form and check the information before submitting';

function handleSubmit() {
	alert('Order successfully!');
}
//cach 1
function validation(data) {
	var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let error = {
		errorName: '',
		errorEmail: '',
		errorSubject: '',
		errorMessage: '',
		isError: false,
	};

	if (!data.name) {
		error.errorName = 'Please fill out your name'
		error.isError = true;
	}
	if (data.name.length > 100) {
		error.errorName = 'Your name should not exceed 100 characters';
		error.isError = true;
	}

	if (!data.email.match(validRegex)) {
		error.errorEmail = 'Please fill a email.';
		error.isError = true;
	}
	if (!data.email) {
		error.errorEmail = 'Please fill out your email.';
		error.isError = true;
	}
	if (data.email.length > 100) {
		error.errorEmail = 'Your name should not exceed 100 characters';
		error.isError = true;
	}
	if (!data.subject) {
		error.errorSubject = 'Please fill out the subject.';
		error.isError = true;
	}
	if (data.subject.length < 25) {
		error.errorSubject = 'Subject should not shorter than 50 characters.';
		error.isError = true;
	}
    if (data.subject.length > 250) {
		error.errorSubject = 'Subject should not exceed 250 characters';
		error.isError = true;
	}
	if (!data.message) {
		error.errorMessage = 'Please fill out the message.';
		error.isError = true;
	}

	if (data.message.length > 500) {
		error.errorSubject = 'Message should not exceed 500 characters.';
		error.isError = true;
	}
	return error;
}

//cach 2
function handleOnChange() {
	const submit = document.getElementById('submit');
	const yourName = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const subject = document.getElementById('subject').value;
	const message = document.getElementById('message').value;
	const dataForm = { name: yourName, email: email, subject: subject, message: message };

	const errorName = document.getElementById('error-name');
	const errorEmail = document.getElementById('error-email');
	const errorSubject = document.getElementById('error-subject');
	const errorMessage = document.getElementById('error-message');
	const check = validation(dataForm);

	errorName.innerHTML = check.errorName;
	errorEmail.innerHTML = check.errorEmail;
	errorSubject.innerHTML = check.errorSubject;
	errorMessage.innerHTML = check.errorMessage;
	if (check.isError) {
		return (submit.disabled = true);
	}
	submit.disabled = false;
	submitError.innerHTML = '';

	return data;
}