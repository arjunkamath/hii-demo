var json = {}
var start_epoch = 1511686472; // Mon, 26 Nov 2017 08:54:32 GMT
var increment = 3600; // 5 minutes
var no_of_values = 5000;

for (var i=0; i< no_of_values; i++) {

	json[start_epoch.toString()] = Math.floor((Math.random() * 9)) - 3;
	start_epoch += increment;

}

console.log(JSON.stringify(json));