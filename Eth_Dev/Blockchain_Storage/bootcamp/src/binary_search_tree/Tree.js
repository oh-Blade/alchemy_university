class Tree {
    constructor() {
        this.root = null;

    }
    addNode(node) {
        if (this.root == null) {
            this.root = node;
        } else {
            this.addNextNode(this.root, node);
        }
    }

    addNextNode(parentNode, node) {
        if (node.data < parentNode.data) {
            if (parentNode.left == null) {
                parentNode.left = node;
            } else {
                this.addNextNode(parentNode.left, node);
            }
        } else {
            if (parentNode.right == null) {
                parentNode.right = node;
            } else {
                this.addNextNode(parentNode.right, node);
            }
        }
    }

    hasNode(number) {
        return this.findNode(this.root, number);
    }

    findNode(node, number) {
        if (node == null) {
            return false;
        }
        if (node.data == number) {
            return true;
        }
        if (number < node.data) {
            return this.findNode(node.left, number);
        } else {
            return this.findNode(node.right, number);
        }
    }

}

module.exports = Tree;

/**
 * 在递归调用方法时，前面加 `this` 是为了保证该方法的调用仍然在当前实例的上下文中进行。

如果不加 `this`，直接调用，那么这个方法调用将在全局作用域中进行，因为 JavaScript 中的函数默认情况下是在全局作用域中执行的，只有通过 `this` 或者 `call`、`apply`、`bind` 等方法才能指定执行的作用域。

如果在全局作用域中执行 addNextNode 方法，会导致以下问题：

1. 无法访问到实例的 `root` 属性，因为 `root` 属性是在实例的上下文中定义的。
2. 无法正确地修改实例的状态，因为这个函数调用与实例无关。
3. 可能会导致无限递归或其他意料之外的错误，因为调用链不再与原始实例相连。

而通过 `this.` 的方式，我们确保了递归调用仍然在实例的上下文中进行，可以正确地访问实例的属性和方法，并且能够正确地修改实例的状态。

所以，在类的方法中使用递归时，如果递归调用是在同一个类的方法中进行的，那么通过 `this` 进行调用是非常必要的。这可以确保递归调用的上下文不会改变，从而避免一些潜在的错误。
 */