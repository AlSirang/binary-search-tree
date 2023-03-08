class Tree {
  constructor() {
    this.root = null;
  }
  addNode(node) {
    if (this.root === null) return (this.root = node);

    this.addChild(this.root, node);
  }

  addChild(parent, child) {
    if (parent.data > child.data && parent.left !== null)
      return this.addChild(parent.left, child);

    if (parent.data < child.data && parent.right !== null)
      return this.addChild(parent.right, child);

    if (parent.data > child.data) return (parent.left = child);
    if (parent.data < child.data) return (parent.right = child);
  }

  searchNode(parent, data) {
    if (data === parent.data) return true;

    if (parent.data < data && parent.right === null) return false;
    if (parent.data > data && parent.left === null) return false;

    if (parent.data > data && parent.left)
      return this.searchNode(parent.left, data);

    if (parent.data < data && parent.right)
      return this.searchNode(parent.right, data);
  }
  hasNode(data) {
    return this.searchNode(this.root, data);
  }
}

module.exports = Tree;
