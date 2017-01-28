d3.json("data.json", function(data){
	
	var min = d3.min(data, function(d){
		return d.age;
	});

	console.log(min);

	var max = d3.max(data, function(d){
		return d.age;
	});

	var ages = d3.set(data, function(d){
		return d.age;
	})

	console.log(ages.values());

})


