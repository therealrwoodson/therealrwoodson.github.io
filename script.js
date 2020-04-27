var $result = [];
var $mothers = ['saddening', 'scary', 'difficult', 'uncertain', 'terrible', 'troubling'];

function whatTime(){
  console.log($result);
  var $times;
  var $url;
  
  function getRandomInt(array) {
    return Math.floor(Math.random() * Math.floor(array.length-1));
  };
  
  function shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	};

	return array;

};

  
  const timesRequest = new XMLHttpRequest();
  do { 
    shuffle($mothers);
    var x = getRandomInt($mothers);
  }  while ($result.includes($mothers[x]));
  
  $url='https://api.datamuse.com/words?rel_syn=' + $mothers[x];
  timesRequest.open("GET", $url);
  timesRequest.responseType = 'json';
  timesRequest.send();

  
  
  timesRequest.onload = function() {
    $times = timesRequest.response;
    do { 
      shuffle($times);
      var y = getRandomInt($times);
    } while ($result.includes($times[y].word));
    
    if ($result.length >= 8) {
      $result = [];
    } else {
      $result.push($mothers[x], $times[y].word);
    };
    
    //console.log("In these " + $times[y].word + " times...");
    document.getElementById('target').innerHTML = "In these " + $times[y].word + " times...";
  };
  
};



setInterval(whatTime, 2000);
function ok(){
  console.log(whatTime());
};
whatTime();
