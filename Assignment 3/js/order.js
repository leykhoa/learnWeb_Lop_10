function handleOnChange() {
	const cake = document.getElementById('cake-name').value;
	const img = document.getElementById('img-cake');
	const price = document.getElementById('price-cake');
	console.log('check cake', cake === '1');
	if (cake === '1') {
		img.src = '../images/yellow-cake-chocolate-frosting-1.jpg';
	}
	if (cake === '2') {
		img.src = '../images/coconut-bundt-cake.jpg';
	}
	if (cake === '3') {
		img.src = '../images/cream-cheese-pound-cake.jpg';
	}
	if (cake === '4') {
		img.src = '../images/german-chocolate-cake.jpg';
	}
	if (cake === '0') {
		img.style.display = 'none';
	}
}

function handleSubmit() {
	const date = document.getElementById('deliver-date');
	const convertDate = new Date(date.value).getTime();
	const today = new Date().getTime();
	console.log('check date', date.value, convertDate);
	if (convertDate < today) {
		alert('Không chọn ngày trong quá khứ');
	}
}
