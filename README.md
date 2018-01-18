data-structures
====

Interpretations of common data structures written in JavaScript. This is purely an academic exercise to understand what's going on behind the scenes. Since this is JS, I am not controlling memory like a low-level language.

To demo, ````node <fileName>```` from the terminal.

* [Array List](arrayList.js)
  * Holds an ordered collection of elements.
  * Each piece of data has an index, which enables efficient lookups.
  * Efficient O(1) lookup time / expensive inserts and deletes.
  * In low-level langs, length must be specified when created.
  * JS uses *dynamic arrays*, which are simply called "arrays." Flexible with inserts and deletes, but can affect time/space cost.

* [Linked List](linkedList.js)
  * Holds an ordered sequence of elements in "node" objects.
  * Each node in list points to the next, instead of tracking indexes for each element.
  * Efficient deletes and insertions, O(1) time.
  * Eliminates individual indexes, which makes lookups expensive O(*i*) time, (must walk from the *head* to the *i*th item).
  * Does not need to have a specified length when created.

* [Hash Table](hashTable.js)
  * An unordered "key: value" data structure.
  * Efficient lookups and insertions, average of O(1) time, (worst case is O(*n*) time, but unlikely).
  * In JS, keys are always strings. 

* [Stack](stack.js)
  * A "Last In First Out" data interface (LIFO).
  * Two main methods:
    * push() - add to top.
    * pop() - remove and return top item.
  * Optional methods:
    * peek() - returns top item without removing it.
    * isEmpty() - returns a boolean.
