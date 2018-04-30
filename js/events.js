//define functions here
function pressIt() {
	$('input').on('keydown', function(key) {
		if (key.which === 71) {
			alert('You have pressed the G key!')
		}
	})
}




$(document).ready(function(){
getIt()
// call functions here

});
