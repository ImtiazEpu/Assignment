(function (window) {
	var byeSpeaker = {};
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var speakWord = "Good Bye";
	byeSpeaker.speak = function (name) {
	for(var i = 0; i < names.length; i++){
  	console.log(speakWord + " " + names[i]);
	}

	

  	


}
	window.byeSpeaker = byeSpeaker;



})(window);



	
