/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {

  var head = null;

  var prevNode;

  function getHead() {
    return head;
  }

  function getTail() {
    var currentNode = head;
    while ( currentNode !== null ) {
      if ( currentNode.next !== null ) {
        currentNode = currentNode.next;
      } else {
        return currentNode;
      }
    }
    return currentNode;
  }

  function add(newValue) {
    var tail = getTail();
    var newNode = {
      value: newValue,
      next: null
    };
    if ( tail === null ) {
      head = newNode;
    } else {
      tail.next = newNode;
    }
    return newNode;
  }

  function remove(number) {
    var deleteThisNode = get(number);
    if ( deleteThisNode === false ) {
      return false;
    } else if ( prevNode === null ) {
      head = deleteThisNode.next;
    } else {
    prevNode.next = deleteThisNode.next;
    }
  }

  function get(number) {
    var currentNode = getHead();
    if ( number < 0 ) {
      return false;
    }
    if ( number === 0 ) {
      prevNode = null;
      return currentNode;
    }
    for ( var i = 1; i <= number; i ++ ) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      if ( currentNode === null ) {
        return false;
      }
    }
    return currentNode;
  }

  function insert(newValue, number) {
    var insertNode = {
      value: newValue,
      next: null
    };
    var linkTo = get(number);
    if ( linkTo === false ) {
      return false;
    }
    if ( number === 0 ) {
      insertNode.next = head;
      head = insertNode;
      return head;
    } else {
      prevNode.next = insertNode;
      insertNode.next = linkTo;
      return head;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}


var ll = linkedListGenerator();
var test = ll.getHead();
var testTail = ll.getTail();

console.log(test);
console.log(testTail);
console.log('testingGet', testGet);
   /* //new node to be created
    var insertNode = {
      value: newValue,
      next: null
    };
    //node to link to and replace its position
    var linkTo = get(number);
    if ( number < 0 ) {
      return false;
    }
    if ( linkTo === false ) {
      return false;
    }
    if ( number === 0 ) {
      insertNode.next = head;
      head = insertNode;
      return head;
    }
    prevNode.next = insertNode;
    insertNode.next = linkTo;
    return head;*/