var timeScale = d3.scaleTime()
	.domain([new Date (2016,0,1), new Date()])
	.range ([0,100]);

	console.log(timeScale(new Date(2016, 9, 10)));
	console.log(timeScale(new Date(2016, 7, 29)));

	console.log(timeScale.invert(50));