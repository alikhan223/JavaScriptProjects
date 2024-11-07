const passinput = document.getElementById('pass-input')
const length = document.getElementById('length')
const upper = document.getElementById('uppercase')
const lower = document.getElementById('lowercase')
const number = document.getElementById('numbers')
const symbol = document.getElementById('symbols')
const copy = document.getElementById('copy')
const genrate= document.getElementById('genrate')

    const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
    const numberStr = '0123456789';
    const symbolStr = '~ ! @ # $ % ^ & * ( ) _ + ` - = { } [ ] | \ :  . , ;';
    let password = '';

    genrate.addEventListener('click', () => {

    let str = '';

    if (upper.checked) {
        str += upperCaseStr;
    }

    if (lower.checked) {
        str += lowerCaseStr;
    }

    if (number.checked) {
        str += numberStr;
    }

    if (symbol.checked) {
        str += symbolStr;
    }
    
    
    for (let i = 0; i < length.value; i++) {
       
         console.log(str.length, "Str length");
        let index = Math.floor(Math.random() * str.length)
         console.log(index, "index");
         console.log("Math.random()", Math.random());
         console.log("Math.random() * str.length", Math.random() *  str.length) ;
         console.log(str[index]);
         password += str[index]
        
    }
    console.log(password, "password");
    
    passinput.value = password
    
})

copy.addEventListener('click', () => {

    if (passinput === '') {
        alert("Please Genrate a Password first")
    }else{
        const newelt = document.createElement('textarea')
        newelt.value = passinput.value;
        document.body.appendChild(newelt)
        newelt.select();
        document.execCommand('copy');
        alert("password Copied to clipboard")
        newelt.remove();

    }
})