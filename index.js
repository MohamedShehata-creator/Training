const text = document.getElementById('myText');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', () => {
    text.textContent = 'Now, lets build amazing websites together!';
});
btn2.addEventListener('click', () => {
    text.textContent = 'As a web developer, I create magic with code';
});