$(document).ready(function(){
	
	/*setTimeout(function(){
		$("#wrapper").animate({
			'opacity':'1'
		},700);
	},1000);*/
});
function audioLoad(){
	 $('audio').bind('canplay', function(){
        $(this)[0].currentTime = 8;
        $(this)[0].volume = .5;
    });
}
function otherName()
{
	var input = document.getElementById("userInput").value;
}