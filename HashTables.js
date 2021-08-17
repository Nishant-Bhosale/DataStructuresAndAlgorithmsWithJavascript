class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	_hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		const address = this._hash(key);

		if (!this.data[address]) {
			this.data[address] = [];
			console.log(this.data);
		}
		this.data[address].push([key, value]);
		return this.data;
	}

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
}

const hashTable = new HashTable(50);

hashTable.set("fruit", 200);
hashTable.set("code", 150);

console.log(hashTable.get("fruit"));
// console.log(val);/
