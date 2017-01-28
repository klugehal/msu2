// document.body.innerHTML = `<h1>${d3.version}</h1>`;
var linearScale = d3.scaleLinear()
	.domain([0,100])
	.range([0,1])
	.clamp(true);

	console.log(linearScale(-20));
	console.log(linearScale(50));
	console.log(linearScale(120));

	console.log(linearScale.invert(.5));