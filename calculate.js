var b ="";
$( document ).ready(function() {
	var firstInp = document.getElementById('calculatorInput');
$(".inputElements").on( "click", function() {
	firstInp.innerHTML+=($(this).text());
		secInp = firstInp.innerHTML;
});
$(".evaluate").on( "click", function() {
	try {
		 var finRes  = eval(secInp);
		 firstInp.innerHTML = finRes;
		}catch(err) {
			 firstInp.innerHTML = err.message;
		 }
 });

$(".clear").on( "click", function() {
	$('#calculatorInput').empty(); 
});
});
