function changeFontSize() {
    document.getElementById('box1').style.fontSize = '24px';
}

function changeStyle() {
    document.getElementById('box3').style.fontStyle = 'italic';
}

function changeImage() {
    document.getElementById('box5').style.backgroundImage = 'url(tiger.jpg)';
    document.getElementById('box5').style.backgroundSize = 'cover';
}

function addText() {
    document.getElementById('box7').textContent = 'THIS IS A NEW TEXT';
}
function addNumbers() {
    var a = 5;
    var b = 8;
    var c = a + b;
    return c;
}

function subtractNumbers() {
    var a = 5;
    var b = 8;
    var c = a - b;
    return c;
}

function multiplyNumbers() {
    var a = 5;
    var b = 8;
    var c = a * b;
    return c;
}

function divideNumbers() {
    var a = 5;
    var b = 8;
    var c = a / b;
    return c;
}

function displaySum() {
    var result = addNumbers();
    document.getElementById('result').textContent = 'The sum is: ' + result;
}

function displaySubtraction() {
    var result = subtractNumbers();
    document.getElementById('result').textContent = 'The subtraction is: ' + result;
}

function displayMultiplication() {
    var result = multiplyNumbers();
    document.getElementById('result').textContent = 'The multiplication is: ' + result;
}

function displayDivision() {
    var result = divideNumbers();
    document.getElementById('result').textContent = 'The division is: ' + result;
}
