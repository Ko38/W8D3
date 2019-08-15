function range(start, end){
  if(start === end){
    return [end];
  }
  return [start].concat(range(start + 1, end));
}

function sum(arr){
  if(arr.length === 1){
    return arr[0];
  }

  return arr[0] + sum(arr.splice(1));
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * exponent(base, exp - 1);
}

function fibonacci(n){
  if(n == 1){
    return [1];
  }
  if(n == 2){
    return [1,1];
  }
  let prev = fibonacci(n - 1);
  prev.push(prev[prev.length - 2] + prev[prev.length - 1]);
  return prev;
}

function deepdup(arr){
  if(arr.constructor.name !== "Array"){
    return arr;
  }
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(deepdup(arr[i]));
  }
  return result;
}

function bsearch(arr, target){
  let mid_idx = Math.floor(arr.length/2);
  if (arr[mid_idx] === target){
    return mid_idx;
  }else if(arr[mid_idx] > target){
    return bsearch(arr.splice(0, mid_idx), target);
  }
  else{
    return mid_idx + bsearch(arr.splice(mid_idx + 1, arr.length), target) + 1;
  }
}

function merge(arr1, arr2){
  let result = [];
  while(arr1.length > 0 && arr2.length > 0){
    if(arr1[0] > arr2[0]){
      result.push(arr2.shift());
    }
    else{
      result.push(arr1.shift());
    }
  }

  return result.concat(arr1).concat(arr2);
}

function mergesort(arr){
  if(arr.length <= 1){
    return arr;
  }

  let mid_idx = Math.floor(arr.length/2);  
  let left = mergesort(arr.slice(0, mid_idx));
  let right = mergesort(arr.slice(mid_idx, arr.length));
  return merge(left, right);
}

function subsets(arr){
  if(arr.length === 1){
    return [arr];
  }
  let result = [];
  // for(let i  = 0; i < arr.length; i++){
  //   result.push(subset(arr.splice()))
  // }

  for (let i = 0; i < arr.length; i++) {
    result.push(arr.slice(i, arr.length));
  }

  // return result;
  return result.concat(subsets(arr.slice(0, arr.length-1)));
}

