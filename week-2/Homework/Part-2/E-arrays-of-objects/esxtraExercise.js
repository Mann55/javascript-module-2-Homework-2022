let kitten1 = {
  name: "Fluffy",
  weeksOld: 2,
};

let kitten2 = {
  name: "Megatron",
  weeksOld: 1,
};

let kitten3 = {
  name: "Billy",
  weeksOld: 5,
};

let kittens = [kitten1, kitten2, kitten3];

//console.log(kittens);
//console.log(kittens[0]);
//console.log(kitten1.name);

const result = kittens.filter((kitten) => {
  if (kitten.weeksOld <= 3) {
    return kittens.map((kitten) => kitten.name);
  }
});
console.log(result[0].name + " " + result[1].name);

//const getKittenName = kittens.map((kitten) => kitten.name);
//console.log(getKittenName);
