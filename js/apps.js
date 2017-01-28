var quantizeScale = d3.scaleQuantize()
	.domain([0,100])
	.range(['red','green','white']);

	console.log(quantizeScale(30));
	console.log(quantizeScale(60));
	console.log(quantizeScale(90));

	console.log(quantizeScale.invertExtent('white'));