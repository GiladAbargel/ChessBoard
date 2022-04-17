let divElement = document.createElement('div');
document.body.appendChild(divElement);
let container = document.getElementById('container');
divElement.appendChild('container');
let box1 = document.getElementByid('box1');
let box2 = document.getElementByid('box2');
for (let y = 0; y < 8; y++) {
    for (let x = 0; x < 8; x++) {
        if ((x + y) % 2 === 0) {
            container.appendChild('box1');
        }
        else {
            container.appendChild('box2');
        }
    }
    document.write("\n");
};