const number = [5, 6, 7, 8, 12, 22, 1];

const object = [
	{ name: 'Khoa', age: 28 },
	{ name: 'Tam', age: 15 },
	{ name: 'Kien', age: 16 },
];

const fruits = ['cherry', 'Bananab', 'Bananaaa', 'Lemon'];
const username = 'Le Y Khoa';
const lesson = { id: '123', time: '10h15' };
console.log('check number', number);
console.log('check object', object);
console.log('check fruits', fruits);

console.log(
	'check number - sort',
	number.sort((a, b) => a - b),
);
console.log('check object - sort', object.sort());
console.log('check fruits - sort', fruits.sort());

console.log('check number index=2', number[2]);
console.log('check object index=0', object[0]);
console.log('check fruits index=2', fruits[2]);
console.log('check length number', number.length);
console.log('check length object ', object.length);
console.log('check length fruits ', fruits.length);
console.log('check length name: ', username.length);
console.log('check length name: ', lesson.length);
number.push('Hello');
number.push({ a: 15, b: 20 });
console.log('check number', number);
console.log('check object', object);
console.log('check fruits', fruits);

for (let i = 0; i <= 10; i++) {
	if (number[i] === 8) {
		console.log('into');
		continue;
	}
	console.log('check i', i, ': ', number[i]);
}

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
const ourArray = ['Stimpson', 'J', ['cat']];
const removedFromOurArray = ourArray.shift();

console.log('checck ourArray', ourArray);

console.log('checck removedFromOurArray', removedFromOurArray);
