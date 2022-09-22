/*    

Cấu trúcc một hàm
function functionName(parameters){

            // Code you want to run

        }

const name(parameter) => {}
*/

function handleClick(name) {
	console.log('check name', name);
	return name;
}

const getName = (name) => {
	console.log('check name 2', name);
	return 'Hello, I am ' + name;
};
console.log(handleClick('Khoa'));
console.log(getName('Khang'));
const firstName = 'Nguyen';
const person = {
	firstName: 'John',
	lastName: 'Doe',
	id: 5566,
	fullName: function () {
		return this.firstName;
	},
};
const person1 = {
	firstName: 'John',
	lastName: 'Doe',
	id: 5566,
	fullName: function () {
		return person1.firstName;
	},
};
const person2 = {
	firstName: 'John',
	lastName: 'Doe',
	id: 5566,
	fullName: function () {
		return firstName;
	},
};
console.log('check first name: ', person.fullName());
console.log('check first name: ', person1.fullName());
console.log('check first name: ', person2.fullName());

function handleOnChangInput(event) {
	alert('Value input: ' + event.target.value);
}

const handleOnClick = () => {
	c = 30;
	console.log('check c', c);
	const test = document.getElementById('test');
	const img = document.getElementById('img');
	const test2 = document.getElementById('test2');
	if (test.style.color !== 'red') {
		test.style.color = 'red';
		test.style.fontSize = '50px';
		img.style.display = 'none';
		test2.style.display = 'block';
		test2.style.width = '200px';
		test2.style.height = '200px';
		test2.style.backgroundColor = 'orange';
	} else {
		test.style.color = 'yellow';
		test.style.fontSize = '20px';
		img.style.display = 'block';
		test2.style.display = 'none';
	}
};
