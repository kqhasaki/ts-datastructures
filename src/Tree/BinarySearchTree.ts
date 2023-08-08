class TreeNode<T> {
  public left: TreeNode<T> | null = null;
  public right: TreeNode<T> | null = null;

  public constructor(public value: T) {}
}

/**
 * 二叉搜索树（Binary Search Tree，简称BST）是一种特殊类型的二叉树，它具有以下特点：
 * 二叉树结构：每个节点最多有两个子节点，称为左子节点和右子节点。
 * 有序性：对于树中的每个节点，其左子树的所有节点的值都小于等于该节点的值，而其右子树的所有节点的值都大于等于该节点的值。这个特性使得二叉搜索树可以快速地进行查找操作。
 * 递归定义：二叉搜索树的左子树和右子树也是二叉搜索树。也就是说，每个节点的左右子树都满足二叉搜索树的有序性。
 */
export class BinarySearchTree<T> {
  public root: TreeNode<T> | null = null;

  /**
   * 插入元素
   */
  public insert(value: T): void {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  /**
   * 查找元素
   */
  public search(value: T): TreeNode<T> | null {
    return this.searchNode(this.root, value);
  }

  private searchNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (!node || node.value === value) {
      return node;
    }

    if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  /**
   * 二叉搜索树前序遍历
   */
  public preorderTraversal(): T[] {
    const result: T[] = [];
    this.preorder(this.root, result);
    return result;
  }

  private preorder(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      result.push(node.value);
      this.preorder(node.left, result);
      this.preorder(node.right, result);
    }
  }

  /**
   * 二叉搜索树中序遍历
   */
  public inorderTraversal(): T[] {
    const result: T[] = [];
    this.inorder(this.root, result);
    return result;
  }

  private inorder(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      this.inorder(node.left, result);
      result.push(node.value);
      this.inorder(node.right, result);
    }
  }

  /**
   * 二叉搜索树后序遍历
   */
  public postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrder(this.root, result);
    return result;
  }

  private postOrder(node: TreeNode<T> | null, result: T[]): void {
    if (node) {
      this.postOrder(node.left, result);
      this.postOrder(node.right, result);
      result.push(node.value);
    }
  }

  /**
   * 二叉搜索树层序遍历
   */
  public levelOrderTraversal(): T[] {
    if (!this.root) {
      return [];
    }

    const result: T[] = [];
    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const node = queue.shift()!;
      result.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    return result;
  }
}
