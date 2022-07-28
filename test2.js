/**
 * Don't resolve issues here, just answer to commented question below
 */

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

MyClass.getFullName(); //Which is the result here: error occures as the class is not instantiated with new keyword in a variable before calling its method.

var me = MyClass("Michael", "Sogos");
me.getFullName(); //Which is the result here: error occures as class is instantiated without new keyword.

var you = new MyClass("Mario", "Rossi");
you.getFullName(); //Which is the result here: "Rossi"

MyClass2.getFullName(me); //Which is the result here: error occures beacuse the class is invoked without new keyword.

MyClass2.getFullName(you); //Which is the result here: "Rossi"
