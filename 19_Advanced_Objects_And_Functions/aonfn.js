/*const Person = function (fisrtName,lastName,age) {
	this.fisrtName = fisrtName;
	this.lastName = lastName;
	this.age = age;
};

const person1 = new Person ('Tom','Clanchy',27);
console.log(person1);*/

const Hangman = function(word,attempsts){
	this.word = word;
	this.attempsts = attempsts;
}

const game1 = new Hangman('Cat',2);
const game2 = new Hangman('New Jersey',4);