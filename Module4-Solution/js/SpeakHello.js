(function (window) {
	var helloSpeaker = {};
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	var speakWord = "Hello";
	helloSpeaker.speak = function (name) {
	for(var i = 0; i < names.length; i++){
	console.log(speakWord + " " + names[i]);
	}

}
	window.helloSpeaker = helloSpeaker;

})(window);

