class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
  }

  pop() {
    this.length--; // Now use as last index of array.
    const dataRemoved = this.get(this.length);
    delete this.data[this.length];
    return dataRemoved;
  }

  insert(index, data) { // Not sure if this is how a classic array list handles an insert.
    if (this.data.hasOwnProperty(index)) {
      this.data[index] = data;
      return this.get(index);
    } else {
      return undefined;
    }
  }

  delete(index) { // Demonstrates slowness of a delete.
    const dataRemoved = this.get(index);
    this.length--;
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    return dataRemoved;
  }
}


const demoArr = new ArrayList;
console.log('NEW:\n', demoArr);

for (let i = 0; i < 100; i++) {
  demoArr.push(i.toString());
}
console.log('\npush:\n', demoArr);

console.log('\nget:', demoArr.get(25));
console.log('\npop:', demoArr.pop());
console.log('\ndelete:', demoArr.delete(3));

console.log('\ninsert:', demoArr.insert(60, 'foo'));
console.log('\ninsert:', demoArr.insert(400, 'bar'));

console.log('\nFINAL FORM:\n', demoArr);
