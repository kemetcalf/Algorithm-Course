function caesarCipher(str, num) {
	var LowerCaseString = str.toLowerCase();
	var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
	var newstring = "";

	for (var i = 0; i < LowerCaseString.length; i++) {
		var currentLetter = LowerCaseString[i];
		if (currentLetter === " ") {
			newstring += currentLetter;
			continue;
		}
	}
}
