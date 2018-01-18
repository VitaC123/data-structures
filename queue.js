class Queue {
  constructor() {
    this.data = {};
    this.nextKey = 0;
    this.endOfQueue = 0;
  }

  enqueue(data) {
    this.data[this.nextKey] = data;
    this.nextKey++;
  }

  dequeue() {
    if (this.nextKey - this.endOfQueue === 0) {
      return undefined;
    }
    const dataRemoved = this.data[this.endOfQueue];
    delete this.data[this.length];
    this.endOfQueue++;
    return dataRemoved;
  }
}

const demoQueue = new Queue;
console.log(demoQueue);

demoQueue.enqueue('foo');
demoQueue.enqueue('bar');
demoQueue.enqueue('baz');
console.log(demoQueue);

console.log('\ndequeue: ', demoQueue.dequeue());
console.log('\ndequeue: ', demoQueue.dequeue());
console.log('\ndequeue: ', demoQueue.dequeue());
console.log('\ndequeue: ', demoQueue.dequeue());

console.log(demoQueue);
