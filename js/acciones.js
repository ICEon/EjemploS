
$(document).ready(function(e) {

document.addEventListener("deviceready", onDeviceReady, false);


 function onDeviceReady() {
	 $("#btn-sonido").on("tap",function(){
		navigator.notification.beep(2); 
	 });
 } //device ready
}); //ready