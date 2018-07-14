const Person = function (fisrtName,lastName,age) {
	this.fisrtName = fisrtName;
	this.lastName = lastName;
	this.age = age;
};
Person.prototype.getBio = function(){
	return `${this.fisrtName} is ${this.age}.`
}
Person.prototype.setName = function(fullName){
	const names = fullName.split(' ');
	this.fisrtName = names[0];
	this.lastName = names[1];
}

const person1 = new Person ('Tom','Clanchy',27);
person1.setName('John Doe');
console.log(person1.getBio());