function increment() {
  let counter = document.getElementById('counter');
  counter = ++ counter.innerText;
}

function decrement() {
  let counter = document.getElementById('counter');
  counter = -- counter.innerText;
}

function reset() {
  let counter = document.getElementById('counter');
  counter.innerText = 0;
}


function changeme(){
  let color = document.getElementById('color');
  let changeme = document.getElementById('changeme');
  changeme.style.backgroundColor = color.value;
}