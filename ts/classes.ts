interface Drivable {
	drive: () => void;
}

class Car implements Drivable {
	private color: string;
	protected brand: string;
	constructor(color: string, brand: string) {
		this.color = color;
		this.brand = brand;
	}
	public drive() {
		console.log("Driving!");
	}
	public getColor() {
		return this.color;
	}
}

const c = new Car("red", "Volvo");
c.drive();
console.log(c.color);
console.log(c.brand);
console.log(c.getColor());
