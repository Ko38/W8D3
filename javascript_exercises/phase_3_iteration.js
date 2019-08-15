Array.prototype.bubbleSort = function () {
  for (let i = this.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (this[i] < this[j]) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
};

String.prototype.substring = function () {
  arr = [];
  for (let i = 0; i < this.length; i++) {
    for (let j = i; j < this.length; j++) {
      arr.push(this.slice(i, j + 1));
    }
  }

  return arr;
};