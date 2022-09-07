function reverseArrayInPlace(arr) {
	for (var i = 0; i < arr.length / 2; i++) {
		var tempVar = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tempVar;
	}

	return arr;
}

reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]);

// Manipulate the array passed in to reverse and then return it
// **No pushing to a new array to return
// **No array.reverse()
// **Hint: use of temporary variable?
// BEBEH: challenge mode: sort array without using array.sort()
