class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	//Get item at an index
	get(index) {
		return this.data[index];
	}

	//Push item at the end of an array
	push(item) {
		this.data[this.length] = item;
		this.length++;
		return this.length;
	}

	//Remove item from end of an array
	pop() {
		const lastItem = this.data[this.length - 1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	//Delete item at a specific index
	delete(index) {
		const itemToDelete = this.data[index];
		this.shiftIndexes(index);
		return itemToDelete;
	}

	//Function to shift indexes
	shiftIndexes(index) {
		for (let i = index; i < this.length - 1; i++) {
			this.data[i] = this.data[i + 1];
		}
		delete this.data[this.length - 1];
		this.length--;
	}

	//Shift method to add item at the start of an array
	shift(item) {
		const lastItem = this.data[this.length - 1];
		for (let i = this.length - 1; i <= this.length - 1; i--) {
			this.data[i + 1] = this.data[i];
			if (i === 0) {
				break;
			}
		}
		this.data[0] = item;
		this.length++;
		this.data[this.length - 1] = lastItem;
	}
}

const newArr = new MyArray();

newArr.push("Hello");
newArr.push("hihihi");
newArr.shift("first");
newArr.shift("defa");
newArr.shift("ant");
newArr.delete(2);
console.log(newArr);
