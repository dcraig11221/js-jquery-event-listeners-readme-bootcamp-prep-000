//define functions here
function submitIt() {
	$('input:submit').on('submit', function() {
		alert('Your form is going to be submitted now.')
	})
}




$(document).ready(function(){
getIt()
submitIt()
// call functions here

});
