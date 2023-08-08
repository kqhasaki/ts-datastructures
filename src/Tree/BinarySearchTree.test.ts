import { BinarySearchTree } from "./BinarySearchTree"; //

describe("BinarySearchTree", () => {
  let bst: BinarySearchTree<number>;

  beforeEach(() => {
    bst = new BinarySearchTree<number>();
  });

  test("should insert elements correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);

    expect(bst.inorderTraversal()).toEqual([2, 3, 5, 7]);
  });

  test("should search for elements correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);

    expect(bst.search(5)).not.toBeNull();
    expect(bst.search(4)).toBeNull();
  });

  test("should perform preorder traversal correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);

    expect(bst.preorderTraversal()).toEqual([5, 3, 2, 7]);
  });

  test("should perform inorder traversal correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);

    expect(bst.inorderTraversal()).toEqual([2, 3, 5, 7]);
  });

  test("should perform postorder traversal correctly", () => {
    bst.insert(5);
    bst.insert(3);
    bst.insert(7);
    bst.insert(2);

    expect(bst.postOrderTraversal()).toEqual([2, 3, 7, 5]);
  });
});
