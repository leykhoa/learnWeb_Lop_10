if (5 > 6) {
	console.log('Yes!!! 5>6');
}

if (5 < 6) {
	console.log('Yes!!! 5<6');
}

let objName = 'javascript';

if (objName.length > 15) {
	console.log('Length cua objName', objName.length);
} else {
	console.log('Length cua objName khong lon hon 15', objName.length);
}

if (objName === 'javascript') {
	console.log('objName', objName);
} else {
	console.log('name is not javascript');
}

if (objName.includes('java')) {
	console.log('name includes java', objName);
} else {
	console.log('name does not include java ');
}

function test(a, b) {
	if (a > b) {
		return { a, b };
	}
	console.log('Hello return!!!');
	return { c: a, d: b };
}

console.log(test(5, 6));
console.log(test(6, 4));

function compare(a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		if (a > b) {
			return console.log('a > b');
		} else {
			return console.log('b>a');
		}
	} else if (typeof a !== 'number' || typeof b !== 'number') {
		console.log('a or b is not number');
	} else {
		console.log('a and b is string');
	}
}

function compare2(a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		if (a > b) {
			return console.log('a > b --');
		} else {
			return console.log('b>a --');
		}
	}
	if (typeof a !== 'number' || typeof b !== 'number') {
		return console.log('a or b is not number --');
	}
	return console.log('a and b is string -- ');
}

compare(2, 'Hi');
compare2(2, 'Hi');

function switchTest(val) {
	let answer;
	switch (val) {
		case 1:
			answer = 'a';
			break;
		case 2:
			answer = 'b';
			break;
		default:
			answer = 'Not a and b';
	}
	return console.log('answer1: ', answer);
}

switchTest(1);
switchTest(3);

function switchTest2(a, b) {
	let answer;
	let compare;
	if (a > b) {
		compare = true;
	} else {
		compare = false;
	}
	switch (compare) {
		case true:
			answer = 'a > b';
			break;
		case false:
			answer = 'a < b';
			break;
		default:
			answer = 'a = b';
	}
	return console.log('answer2: ', answer);
}

switchTest2(5, 5);

var grades = [2, 5, , , 9, 8, , 8];

var sum = 0;

var count = 0;

if (grades.length > 0) {
	for (var index = 0; index < grades.length; index++) {
		if (grades[index] != undefined) {
			sum += grades[index];

			count += 1;
		}
	}

	console.log('check ', sum / count);
} else {
	console.log('Empty array!!!');
}

let A = [];
console.log('check length a', A.length);

if (A.length >= 0) {
	A.push('Hello');
	console.log('check a push helloo', A);
}
let a = 2;
let b = [];
if (!a) {
	console.log('Hello world', a);
}
if (b.length === 0) {
	console.log('Hello array', b);
}
let result;
function checkValue(a, b) {
	a > b ? (result = 'a > b') : (result = 'a < b');
	return console.log('check value', result);
}

checkValue(0, 2);

if (b) {
	console.log('Hello a va b');
}
