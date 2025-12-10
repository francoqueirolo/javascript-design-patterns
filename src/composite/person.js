export class Person {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.parent = null;
  }

  addChild(child) {
    this.children.push(child);
    child.parent = this;
  }

  traverseUp() {
    if (this.parent) {
      console.log(this.name + ' is the child of ' + this.parent.name);
      this.parent.traverseUp();
    } else {
      console.log(this.name + ' is the root node');
    }
  }

  traverseDown() {
    if (this.children.length) {
      this.children.forEach(function (child) {
        console.log(this.name + ' is the parent of ' + child.name);
        child.traverseDown();
      }, this);
    } else {
      console.log(this.name + ' is a leaf node');
    }
  }
}
