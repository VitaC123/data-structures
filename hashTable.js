// Keys are not guaranteed to stay in the same order.
const hashTable = {
  1: 'value a',
  2: 'value b',
  3: 'value c'
};

for (let key in hashTable) {
  console.log(`The ${hashTable[key]} is the value of ${key}`);
}

// Alternative...
Object.keys(hashTable).forEach(key => console.log(`The ${hashTable[key]} is indeed the value of ${key}`));
