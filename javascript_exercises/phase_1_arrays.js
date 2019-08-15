Array.prototype.uniq = function(){
  let arr = [];
  this.forEach(
    function(ele){
      if(!arr.includes(ele)){
        arr.push(ele);
      }
    }
  );
  return arr;
};

Array.prototype.twoSum = function(sum = 0){
  let arr = [];
  for(let i = 0; i < this.length - 1; i++){
    for(let j = i + 1; j < this.length; j++){
      if(this[i] + this[j] === sum){
        arr.push([i, j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = function(){
  let arr = [];
  for(let i = 0; i < this[0].length; i++){
    arr.push([]);
  }

  for(let i = 0; i < this.length; i++){
    for(let j = 0; j < this[i].length; j++){
      arr[j].push(this[i][j]);
    }
  }

  return arr;
};


