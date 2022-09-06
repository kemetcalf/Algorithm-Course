function caesarCipher(str, num) {
	num = num % 26;
	var LowerCaseString = str.toLowerCase();
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	var newString = "";

	for (var i = 0; i < LowerCaseString.length; i++) {
		var currentLetter = LowerCaseString[i];
		if (currentLetter === " ") {
			newString += currentLetter;
			continue;
		}
		var currentIndex = alphabet.indexOf(currentLetter);
		var newIndex = currentIndex + num;
		if (newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0) newIndex = 26 + newIndex;
		if (str[i] === str[i].toUpperCase()) {
			newString += alphabet[newIndex].toUpperCase();
		} else newString += alphabet[newIndex];
	}
	return newString;
}

caesarCipher("Zoo Keeper", 2);
caesarCipher("Big Car", -16);
caesarCipher("Javascript", -900);
