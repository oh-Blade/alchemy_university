const concat = (a, b) => `Hash(${a} + ${b})`;

class MerkleTree {
  constructor(leaves, concat) {
      this.leaves = leaves;
      this.concat = concat;
  }
  getRoot() {
      return this.findRoot(this.leaves);
  }

  findRoot(leaves){
    console.log("1: "+leaves.length);
      if(leaves.length < 1){
          return leaves[0];
      }
      const leavesArray = [];
      while(leaves.length >= 2){
          leavesArray.push(this.concat(...leaves.splice(0,2)));
          console.log(leavesArray);
      }
      if(leaves.length === 1){
        leavesArray.push(leaves[0]);

      }
      return this.findRoot(leavesArray);

  }

  getProof(index, layer = this.leaves, proof = []) {
    if (layer.length === 1) return proof;
    const newLayer = [];
    for (let i = 0; i < layer.length; i += 2) {
        let left = layer[i];
        let right = layer[i + 1];
        if (!right) {
            newLayer.push(left);
        }
        else {
            newLayer.push(this.concat(left, right));

            if (i === index || i === index - 1) {
                let isLeft = !(index % 2);
                proof.push({
                    data: isLeft ? right : left,
                    left: !isLeft
                });
            }
        }
    }
    return this.getProof(Math.floor(index / 2), newLayer, proof);
}

}

const leaves = ['A', 'B'];
const merkleTree = new MerkleTree(leaves, concat);
console.log(merkleTree.getRoot());