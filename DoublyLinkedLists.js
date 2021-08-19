class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);

		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);

		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
		return this;
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = new Node(value);

		const leadNode = this.traverseList(index - 1);
		const follower = leadNode.next;
		leadNode.next = newNode;
		newNode.prev = leadNode;
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;
		return this;
	}

	// remove(index) {
	// 	if (index < 0 || index > this.length) throw new Error("Enter valid Index");

	// 	const leadNode = this.traverseList(index - 1);
	// 	const follower = leadNode.next;

	// 	leadNode.next = follower.next;
	// 	console.log(leadNode);
	// 	console.log(follower);
	// 	this.length--;
	// }

	traverseList(index) {
		let currentNode;
		let counter = 0;

		currentNode = this.head;

		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}

		return currentNode;
	}
}

const myDoublyLinkedList = new DoublyLinkedList("roh");

myDoublyLinkedList.append("aash");
myDoublyLinkedList.prepend("nish");
myDoublyLinkedList.insert(1, "sajf");
console.log(myDoublyLinkedList);
