function getMean(array) {
	var sum = array.reduce((a, b) => a + b, 0);
	var mean = sum / array.length;
	return mean;
}
// var sampleArr = [1, 2, 2, 3, 4];

// getMean(sampleArr);

function getMedian(array) {
	var middleIndex = Math.round(array.length / 2) - 1;
	var median = array[middleIndex];
	return median;
}
// var sampleArr = [1, 2, 2, 3, 4];

// getMedian(sampleArr);

function getMode(array) {
	const count = {};

	array.forEach((element) => {
		console.log(element);
		// compare array element to keys found in count object
		// if array value/count key is present in count obj, increment count value at that key
		if (count[element] >= 1) {
			count[element] = count[element] + 1;
			// if array value/count key is NOT present in count obj, add key to count obj and set value at 1
		} else {
			count[element] = 1;
		}
	});

	const countArr = Object.entries(count);
	countArr.sort((a, b) => b[1] - a[1]);
	let modePair = countArr[0];
	const mode = parseInt(modePair[0]);

	return mode;
}
var sampleArr = [1, 2, 3, 2, 3, 4, 2, 3, 3];

getMode(sampleArr);

function meanMedianMode(array) {
	const mean = getMean(array);
	const median = getMedian(array);
	const mode = getMode(array);
	const result = { mean, median, mode };
	return result;
}

meanMedianMode(sampleArr);

// PROMPT: create algorithm that returns the mean, median, and mode with functional programming format
