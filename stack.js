class Stack {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
  }

  peek() {
    return this.data[this.length - 1];
  }

  isEmpty() {
    return Object.keys(this.data).length === 0;
  }

  pop() {
    if (this.length < 1) {
      return undefined;
    }
    this.length--;
    const dataRemoved = this.data[this.length];
    delete this.data[this.length];
    return dataRemoved;
  }
}

const demoStack = new Stack;
console.log(demoStack);

console.log('\nisEmpty:', demoStack.isEmpty());
demoStack.push('foo');
demoStack.push('bar');
demoStack.push('baz');
console.log('\nisEmpty:', demoStack.isEmpty());

console.log('\npeek:', demoStack.peek());
console.log('\npop:', demoStack.pop());

console.log('\nFINAL:', demoStack);
