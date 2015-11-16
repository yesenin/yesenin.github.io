$.getJSON('http://yesenin.github.io/z/spartak.json', function(data) {
	for(var i in data) {
		console.log(data[i][name]);
	}
});