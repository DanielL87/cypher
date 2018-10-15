jQuery("h1").click(function() {
  alert(userSentence);
});

jQuery("h2").click(function() {
  alert(fourthFunction(userSentence));
});

jQuery(".pic1").click(function() {
  alert(userSentence);
});

jQuery(".pic2").click(function() {
  alert(fourthFunction(userSentence));
});


var userSentence = prompt("Please enter a sentence:")

var firstLastCapitals = function(userSentence) {
  return userSentence[0].toUpperCase() + userSentence[userSentence.length - 1]
          .toUpperCase()
}

var reverseFirstLastCapitals = function(userSentence) {
  return userSentence[userSentence.length - 1].toUpperCase() +
          userSentence[0].toUpperCase()
}

var both = function(){
  return userSentence + reverseFirstLastCapitals(firstLastCapitals(userSentence))
}

var fourthFunction = function(userSentence){
  return ((userSentence[Math.floor(userSentence.length / 2)]) + userSentence
  + reverseFirstLastCapitals(userSentence)).split('').reverse().join("")
}
