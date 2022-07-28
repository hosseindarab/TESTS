//Re-write test2.js class in order to resolve any issues, and comment everything in order to let VSCode help you suggesting the code and its meaning

 class MyClass {
	constructor(firstName, lastName) {
		this.firstName = "";
		this.lastName = lastName;
	}

	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

class MyClass2 {
	static getFullName(entity) {
		return entity.getFullName();
	}
}

var fullName = new MyClass("Hossein", "Darab") 
fullName.getFullName()

var me = new MyClass("Michael", "Sogos");
me.getFullName(); 

var you = new MyClass("Mario", "Rossi");
you.getFullName();

MyClass2.getFullName(me); 

MyClass2.getFullName(you);
