function Cat(owner, name){
  this.owner = owner;
  this.name = name;
}

Cat.prototype.cuteStatement = function(){
  return `${this.owner} loves ${this.name}`;
};

let cat1 = new Cat("aaron", "to");

let cat2 = new Cat("Phillip", "ko");

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.cuteStatement = function(){
  return `Everyone loves ${this.name}`;
};

console.log(cat1.cuteStatement());
console.log(cat2.cuteStatement());

Cat.prototype.meow = function(){
  return "proto meow";
};

cat1.meow = function(){
  return "meow";
};

console.log(cat1.meow());
console.log(cat2.meow());