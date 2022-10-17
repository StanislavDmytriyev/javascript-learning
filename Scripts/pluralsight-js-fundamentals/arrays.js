/*
1) Items listed in arrays are called ELEMENTS
2) Two ways to assign an array: 
        let values01 = ["a", "b", "c"];
        let values02 = Array.of(1, 2, 3);
3) Check if something is an array
        console.log(Array.isArray(values01));
4) PUSH - adds last index to the array
        values01.push("d")
5) POP - takes the last element off from the array
        values01.pop()
6) SHIFT - takes the first element off the array
        values01.shift()
7) UNSHIFT - inserts a new element to the beginning of the array
        values01.unshift("aaa")
8) SLICE does not change the original array, but makes a copy under new variable name
        let newValues = values01.slice() - with empty arguments it will create a copy of an array
9) values.SPLICE(0, 2) - deletes an element starting with index [0], two elements to be deleted (in this case [0] and [1])
10) values.SPLICE(1, 0, "it's a splice") - inserts an element. 1 is the index, 0 - is for how many elements to be deleted, "it's a splice" is a new element
11) Search through an array methods: FILTER (values01.filter ...) , FIND (values01.find ...), FOR EACH (values01.forEach ...)
*/

"use strict";

let values01 = ["a", "b", "c"];
let values02 = Array.of(1, 2, 3);
values01[0] = "aaa";
values01.push("d");
values01.push("e", "f", "g");
const last = values01.pop();
const first = values01.shift();
values01.unshift("hello", "world");
console.log(values01);

console.log(Array.isArray(values01));

const newValues = values01.slice(0, 2);
console.log(newValues);
values01.splice(0, 2);
console.log(values01);
values01.splice(3, 0, "D - is for drum");
console.log(values01);
console.log(values01.indexOf("c"), values01.indexOf("r"));

// Filter method to search an array
const set = values01.filter(function (item) {
  return item > "c";
});
console.log(set, Array.isArray(set));

// Find method to search an array
const found = values01.find(function (item) {
  return item.length > 2;
});
console.log(found, typeof found);

// FOR EACH
values01.forEach(function (item) {
  console.log(item);
});

//
const containers = document.getElementsByClassName("container");
containers[1].classList.add("d__none");
console.log(containers);
