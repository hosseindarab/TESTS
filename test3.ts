export class MyClass3 {
	height: number;
	weight: number;

	constructor(height: number, weight: number) {
		this.height = height || 0;
		this.weight = weight || 0;
	}

	calcArea() {
		(this.height * this.weight) / 2;
	}
}

//What do the keyword "export" ? it makes the class available across the application files in order to call and use it. In this case causes error as we have to export class usually at the last line of code by using export default calss name.
//Which is difference between INT32, INT64 and NUMBER ? Int32 and Int64 are defined by their names. Int32 is a signed, thirty-two byte integer value (4 bytes), and an int64 is a signed, sixty-four bit integer value (8 bytes). 
// Int32 has a min/max of 2.147 billion and int64 has a min/max of 9223 with a lot of zeroes. 
// for example:
// Int32 -- (-2,147,483,648 to +2,147,483,647)
// Int64 -- (-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807)
//Write below line of code to round the result of "calcArea()" to 2 decimal digits
// Math.round((calcArea() + Number.EPSILON) * 100) / 100
//Can you explain line 6 and 7 ? it valorize the properties initial values when we call the method or if the arguments not passed they will initialized with 0.
//Can you write below a line of code to call the method "calcArea()"
// var cal = new MyClass3(16, 18)
// cal.calcArea();
//Can you write same class above (add lines of code here below) but without make it instantiable ?
// using abstract keyword.
export abstract class MyClass {         
    height: number;
	weight: number;

	constructor(height: number, weight: number) {
		this.height = height || 0;
		this.weight = weight || 0;
	}

	calcArea() {
		(this.height * this.weight) / 2;
	}
}
