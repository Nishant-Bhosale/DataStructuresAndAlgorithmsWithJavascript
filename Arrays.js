class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {
		return this.data[index];
	}

	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {
		const itemToDelete = this.data[index];
		this.shiftIndexes(index);
		return itemToDelete;
	}

	shiftIndexes(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}
}

const newArr = new MyArray();

newArr.push("Hello");
newArr.push("hihihi");
newArr.push("hihi");
newArr.push("hi");
// newArr.delete(1);
console.log(newArr);
