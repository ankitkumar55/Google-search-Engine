
function show_hide() {
  var click = document.getElementById("dropdown-content");
  if(click.style.display == "none") {
     click.style.display ="block";
  } 
  else {
     click.style.display ="none";
  } 
}

function enterKeyPressed(event) {
  if (event.keyCode == 13) {
  let inp= document.querySelector('input');
  let result= document.querySelector('.search').href='https://www.google.com/search?q='+inp.value;
    window.open(result, '_self');
    console.log(result);
    return true;
  } else {
     return false;
  }
}