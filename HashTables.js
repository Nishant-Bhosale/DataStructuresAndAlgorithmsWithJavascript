class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	//Hash Function
	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	//Set key value pair
	set(key, value) {
		const address = this._hash(key);

		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	//Get value from a key
	get(key) {
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket.length) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		} else {
			return undefined;
		}
	}

	//Gets the keys of the object
	keys() {
		let keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
}

const hashTable = new HashTable(50);

hashTable.set("fruit", 200);
hashTable.set("code", 150);
console.log(hashTable.keys());

function firstRecurringCharacter(arr) {
	let map = {};
	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]] !== undefined) {
			return arr[i];
		} else {
			map[arr[i]] = i;
		}
	}
	return undefined;
}

let a = firstRecurringCharacter([2, 3, 3, 2, 6, 9, 1]);
console.log(a);
