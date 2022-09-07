function reverseWords(string) {
	var wordsArr = string.split(" ");

	var reversedWordsArr = [];

	wordsArr.forEach((word) => {
		var spelledWord = word.split("");

		// Checks for commas and periods at the end of a word;
		var lastIndex = spelledWord.length - 1;
		var lastChar = spelledWord[lastIndex];
		// console.log("lastChar:", lastChar);
		var hasPunctuation =
			lastChar === "," ||
			lastChar === "." ||
			lastChar === "!" ||
			lastChar === "?";
		// console.log("hasPunctuation:", hasPunctuation);

		// if present, pops punctuation out into var for later placement at same index of final array/string
		var withheldPunctuation = [];
		if (hasPunctuation) {
			// console.log(spelledWord);
			var mark = spelledWord.pop();
			withheldPunctuation.push(mark);
			// console.log(spelledWord);
		}

		// console.log(withheldPunctuation); got it

		// Puts array characters into new array in reverse order
		while (spelledWord.length > 0) {
			var eachLetter = spelledWord.pop();
			// console.log(eachLetter);
			reversedWordsArr.push(eachLetter);
			// console.log(reversedWordsArr);
		}
		// Adds punctuation back in
		if (hasPunctuation) {
			reversedWordsArr.push(withheldPunctuation);
		}

		// Adds spaces back in
		if (wordsArr.indexOf(word) < wordsArr.length - 1) {
			// console.log("wordsArr index:", wordsArr.indexOf(word));
			reversedWordsArr.push(" ");
			// console.log(reversedWordsArr);
		}
	});
	// stringifies
	return reversedWordsArr.join("");
}

// reverseWords("Hi, it's me.");
reverseWords("What? No, thanks! That's just, like, your opinion, man.");

// reverse every word in the string
// return the new string
// every word should be reversed, but the string as a whole should not be reversed
// do not use the array.reverse() method

// Instructor Solution:
function reverseWords(string) {
	var wordsArr = string.split(" ");
	var reversedWordsArr = [];

	wordsArr.forEach((word) => {
		var reversedWord = "";
		for (var i = word.length - 1; i >= 0; i--) {
			reversedWord += word[i];
		}
		reversedWordsArr.push(reversedWord);
	});

	return reversedWordsArr.join(" ");
}

reverseWords("Coding JavaScript");
