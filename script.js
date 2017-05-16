/*
 Standard getJSON Format: function(url, data, callback) {
	    return jQuery.get(url, data, callback, "json");
  }
   
Using the .getJSON message to read the json file and 
console.log the data:
*/

$.getJSON('people.json', function(data){
	$(data.people).each(function(index,value){
		console.log(value);
	}); 
});


/*
$.ajax({
	url: 'people.json',
	dataType: 'json',
	type: 'get',
	cache: false,
	success: function(data) {
		$(data.people).each(function(index, value){
			console.log(value);
		});
	}
});

*/
