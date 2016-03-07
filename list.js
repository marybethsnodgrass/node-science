'use strict'

class Node {
    constructor (data) {
        this.payload = data
        this.next = null
    }
}
// above is in ES6. Below is the equivalent in ES5
// function Node (data)
//     this.payload = data
// }

class List {
    constructor () {
        this.head = null
    }
    add (node) {
        if (!this.head) {
            this.head = node
        }
    }
}

const l = new List

console.log(l)
