
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
    var newNode = {
      value: newValue,
      next: null
    };
    var tail = getTail();
    if ( tail === null ) {
      head = newNode;
    } else {
    tail.next = newNode;
    }
    return newNode;
  }

  function get(number) {
    var getNode = head;
    if ( number < 0 ) {
      return false;
    }
    if ( number === 0 ) {
      return getNode;
    }
    for ( var i = 1; i <= number; i ++ ) {
      prevNode = getNode;
      getNode = getNode.next;
      if ( getNode === null ) {
        return false;
      }
    }
    return getNode;
  }


  function remove(number) {
    var deleteThisNode = get(number);
    if ( deleteThisNode === false ) {
      return false;
    } else if ( number === 0 ) {
      head = deleteThisNode.next;
    } else {
      prevNode.next = deleteThisNode.next;
    }
  }

  function insert(newValue, number) {
    var insertNode = {
      value: newValue,
      next: null
    };
    var linkTo = get(number);
    if ( linkTo === false ) {
      return false;
    } else if ( linkTo === head ) {
      insertNode.next = head;
      head = insertNode;
    } else {
    prevNode.next = insertNode;
    insertNode.next = linkTo;
    }
  }

  return {
    getHead: getHead,
    getTail: getTail,
    get: get,
    add: add,
    remove: remove,
    insert: insert
  };
}