
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let output = document.getElementById("output");
let reversebtn=document.getElementById("reverse")
let reverseword=document.getElementById("reverse-word")
let validemail=document.getElementById("vaildemail")

btn.addEventListener('click', () => {
    let inputvalue = input.value;
    let res = capitalize(inputvalue);
    output.innerHTML = `<h2>${res}</h2>`;
});
reversebtn.addEventListener('click', () => {
    let inputvalue = input.value;
    let res = Reverse(inputvalue);
    output.innerHTML = `<h2>${res}</h2>`;
});
reverseword.addEventListener('click', () => {
    let inputvalue = input.value;
    let res = reverse_word(inputvalue);
    output.innerHTML = `<h2>${res}</h2>`;
});
validemail.addEventListener('click', () => {
    let inputvalue = input.value;
    let res = isValidEmail(inputvalue);
    output.innerHTML = `<h2>${res}</h2>`;
});

function capitalize(str) {
    let s = '';
    for (let i = 0; i < str.length; i++) {
        if (i === 0 || str[i - 1] === ' ') {
            s += str[i].toUpperCase();
        } else {
            s += str[i];
        }
    }
    return s;
}
function Reverse(str) {
    return str.split('').reverse().join('');
}
function reverse_word(word) {
    let w = word.split(' ');
    let rev1 = w.reverse();
    let rev = rev1.join(' ');
    return rev;
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
}


