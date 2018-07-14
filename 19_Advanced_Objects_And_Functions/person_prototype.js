const Person = function (fisrtName,lastName,age,likes=[]) {
	this.fisrtName = fisrtName;
	this.lastName = lastName;
	this.age = age;
	this.likes = likes
};
Person.prototype.getBio = function(){
	let bio = `${this.fisrtName} is ${this.age}.`

	this.likes.forEach((like) => {
		bio += ` ${this.fisrtName} likes ${like}.`
	})
	return bio;

}
Person.prototype.setName = function(fullName){
	const names = fullName.split(' ');
	this.fisrtName = names[0];
	this.lastName = names[1];
}

const person1 = new Person ('Tom','Clanchy',27,['Teaching','Riding']);
person1.setName('John Doe');
console.log(person1.getBio());