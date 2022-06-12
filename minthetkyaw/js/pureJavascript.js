let random = ( min = 1, max = 255 ) => Math.floor( ( Math.random() * ( max - min ) ) + min );


let b = document.body;
b.style.height = `100vh`;
b.style.display = 'flex';
b.style.fontSize = '50px';
b.style.justifyContent = 'center';
b.style.alignItems = 'center';
b.style.background = `rgb(${random()},${random()},${random()})`
b.style.color = `rgb(${255 - random()},${255 - random()},${255 - random()})`

b.innerHTML = `Current color = rgb(${random()},${random()},${random()})`
