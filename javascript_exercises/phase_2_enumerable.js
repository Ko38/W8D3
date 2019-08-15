Array.prototype.myEach = function(callback){
  for(let i = 0; i < this.length; i++){
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
};

Array.prototype.myReduce = function (callback, initialValue = 0) {
  let acc = initialValue;
  this.myEach(x => { 
    acc = callback(acc, x);
  });
  
  return acc;
};


