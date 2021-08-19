class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class LinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
		};

		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new Node(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const firstNode = new Node(value);

		firstNode.next = this.head;

		this.head = firstNode;
		this.length++;
	}

	printList() {
		const arr = [];

		let currentNode = this.head;

		while (currentNode !== null) {
			arr.push(currentNode.value);
			currentNode = currentNode.next;
		}
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}

		const newNode = new Node(value);

		const leadNode = this.traverseList(index - 1);

		const nextPointer = leadNode.next;
		leadNode.next = newNode;
		newNode.next = nextPointer;
		this.length++;
		return this.printList();
	}

	remove(index) {
		if (index > this.length || index < 0) throw new Error("Index out of range");

		const leadNode = this.traverseList(index - 1);
		const unwantedNode = leadNode.next;
		leadNode.next = unwantedNode.next;
		this.length--;
		return this.printList();
	}

	traverseList(index) {
		let currentNode = this.head;
		let counter = 0;

		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

const myLinkedList = new LinkedList("Abc");
myLinkedList.append("asfjk");
myLinkedList.append("fsg");
myLinkedList.prepend("1");
myLinkedList.printList();
myLinkedList.insert(2, "efa");
myLinkedList.insert(1, "efafsdfsd");
myLinkedList.remove(3);
myLinkedList.printList();
