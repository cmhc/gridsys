//手机端的js
function showNav(){
	var nav = document.getElementById("nav");
	if(show == false){
		nav.style.left = '0px';
		show = true;
	}else{
		nav.style.left = '-200px';
		show = false;
	}
}

var show = false;
document.getElementById("show-nav").onclick = function(){
	showNav();
}