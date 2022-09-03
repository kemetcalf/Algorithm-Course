// uses strin & array methods and manipulation instead of regex

function isPalindrome(string) {
	string = string.toLowerCase();
	var charactersArr = string.split("");
	var validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");

	var lettersArr = [];
	charactersArr.forEach((char) => {
		if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
	});

	if (lettersArr.join("") === lettersArr.reverse().join("")) return true;
	else return false;
	// return true or false
}

console.log(isPalindrome("race car"));
