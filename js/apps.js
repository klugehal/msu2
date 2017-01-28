var ordinalScale = d3.scaleOrdinal()
	.domain(['cold','cool','okay','nice','warm'])
	.range(['blue','light blue','white','yellow','green']);

console.log(ordinalScale('cool'));
console.log(ordinalScale('warm'));
console.log(ordinalScale('okay'));