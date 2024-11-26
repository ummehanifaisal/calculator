// function press(){
//     alert('welcome to this page')
// }

// function abc(){
//     document.getElementById('abc').innerHTML = 'hello, welcome'
// }

// function read(){
//     document.getElementById('ttt').innerHTML = 'loremjgsudguyg8yhiuhijdqh9gq6d8gq9qysuwnduhr7ey9jijey8wyqhfqy8qrfyuhiudojf9hh'
//     document.getElementById('acd').style.display = 'none';
// }

function press(a){
    document.getElementById('inp').value += a
}

function eq(){
    var a  = document.getElementById('inp')
    a.value = eval(a.value)
}

function clr(){
    document.getElementById('inp').value = ''
}

function clrSingle(){
    var string = document.getElementById('inp').value 
    string = string.slice(0, string.length - 1)
    document.getElementById('inp').value = string
}