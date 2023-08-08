import { BinarySearchTree } from "./BinarySearchTree";

describe("BinarySearchTree", () => {
  it("should insert elements correctly", () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);

    expect(bst.root!.value).toBe(10);
    expect(bst.root!.left!.value).toBe(5);
    expect(bst.root!.right!.value).toBe(15);
    expect(bst.root!.left!.left!.value).toBe(3);
  });

  it("should search for elements correctly", () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);

    const node1 = bst.search(5);
    const node2 = bst.search(15);
    const node3 = bst.search(3);
    const node4 = bst.search(8); // This value does not exist in the BST

    expect(node1?.value).toBe(5);
    expect(node2?.value).toBe(15);
    expect(node3?.value).toBe(3);
    expect(node4).toBeNull();
  });

  it("should perform preorder traversal correctly", () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);

    expect(bst.preorderTraversal()).toEqual([10, 5, 3, 7, 15]);
  });

  it("should perform inorder traversal correctly", () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);

    expect(bst.inorderTraversal()).toEqual([3, 5, 7, 10, 15]);
  });

  it("should perform postorder traversal correctly", () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);

    expect(bst.postOrderTraversal()).toEqual([3, 7, 5, 15, 10]);
  });

  it("should perform level order traversal correctly", () => {
    const bst = new BinarySearchTree<number>();
    bst.insert(10);
    bst.insert(5);
    bst.insert(15);
    bst.insert(3);
    bst.insert(7);

    expect(bst.levelOrderTraversal()).toEqual([10, 5, 15, 3, 7]);
  });
});
