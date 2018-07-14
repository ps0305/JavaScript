  
const Hangman = function(word,attempsts){
	this.word = word.toLowerCase().split('');
	this.attempsts = attempsts;
	this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function(){
	let puzzle = '';

	this.word.forEach((letter) => {
		if(this.guessedLetters.includes(letter) || letter ===' ') {
			puzzle += letter;
		} else {
			puzzle += '*';
		}
	})
	return puzzle;
}
//Creating Method
Hangman.prototype.makeGuess = function(guess) {
	guess = guess.toLowerCase()
	const isUnique = !this.guessedLetters.includes(guess)
	const isBadGuess = !this.word.includes(guess)

	if(isUnique){
		this.guessedLetters.push(guess)
	}
	if(isUnique && isBadGuess){
		this.attempsts--;
	}
}
const game1 = new Hangman('Cat',2);
//make a guess
game1.makeGuess('c')
game1.makeGuess('z')
game1.makeGuess('t')
console.log(game1.getPuzzle())
console.log(game1.attempsts)

//print remaining guesses (should be 1)
const game2 = new Hangman('New Jersey',4);
//guess w
game2.makeGuess('w')
console.log(game2.getPuzzle()) //**w ******