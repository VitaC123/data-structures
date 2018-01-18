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