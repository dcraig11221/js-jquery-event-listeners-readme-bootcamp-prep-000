//define functions here
function getIt() {
  $('p').on('click', function() {
    if ('click'){
      alert("Hey!")
    }
  })
}
function pressIt() {
  $('input').on('keydown', functon() {
    if ('keydown'.which === 71) {
      alert('You have pressed the key G!')
    }
    else {
      null
    }
  })
}



$(document).ready(function(){
getIt()
// call functions here

});
//Define a function pressIt that does not accept a parameter. The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.Define a function `frameIt` that does not accept a parameter. The function should bind the `load` event that adds the class `tasty` to the image to add a red frame to the image.
