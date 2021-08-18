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
			keysArray.push(this.data[i][0][0]);
		}
		return keysArray;
	}
}

const hashTable = new HashTable(50);

hashTable.set("fruit", 200);
hashTable.set("code", 150);
hashTable.keys();

console.log(hashTable.get("fruit"));
// console.log(val);/
