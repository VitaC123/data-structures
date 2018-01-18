class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new ListNode('head');
const b = new ListNode('foo');
const c = new ListNode('bar');
const d = new ListNode('baz');
const e = new ListNode('tail');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log('a:\n', a);
console.log('b:\n', b);
console.log('c:\n', c);
console.log('e:\n', e);
