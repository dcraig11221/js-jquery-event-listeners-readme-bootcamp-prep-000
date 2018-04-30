//define functions here
/*function getIt() {
  $('p').on('click', function() {
    if ('click'){
      alert("Hey!")
    }
  })
}
*/
function frameIt() {
  $(document).on('load', function() {
    $('img').addClass("tasty")
  })
}


$(document).ready(function(){
getIt()
// call functions here

});
//Define a function `frameIt` that does not accept a parameter. The function should bind the `load` event that adds the class `tasty` to the image to add a red frame to the image.
