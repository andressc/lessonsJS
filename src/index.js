/*const jane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const julia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const jane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const julia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];

const verifyCats = (catsJane, catsJulia) => {
  const allCats = [...catsJane.slice(1, -1), ...catsJulia];
  allCats.forEach((v, i) => {
    if (v < 2) {
      console.log(`Кошка № ${i + 1} ещё котёнок`);
    } else {
      console.log(`Кошка № ${i + 1} взрослая, ей ${v} лет`);
    }
  });
};

verifyCats(jane, julia);
console.log("---------------");
verifyCats(jane2, julia2);*/

/*const arr = [444, -55, 23, 114, -86, -772, 66, 263, 455, 49];

const arr2 = arr.map((v) => v * 2);

const arr3 = arr.map((v, i) => {
    return `Транзакция ${i + 1} ${v < 0 ? "отрицательная" : "положительная"}`;
});

console.log(arr);
console.log(arr2);
console.log(arr3);

const arr = [-774, -55, 23, 114, -86, -772, -773, 2635, 455, 49];

const arr2 = arr.filter((v) => v > 0);
console.log(arr2);

//arr4 = arr.reduce((r, v) => r.push(v), [])

const min = arr.reduce((r, v) => (r > v ? v : r));

console.log(min);*/

//lesson 3
/*const getAverageHumanAge = (cats) => {
    const all = cats.map((v) => (v <= 2 ? v * 10 : v * 7)).filter((v) => v >= 18);
    console.log(all.reduce((r, v) => r + v, 0) / all.length);
};

getAverageHumanAge([7, 3, 2, 4, 1, 15, 8, 1, 9, 2]);
getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2]);*/

//lesson 4
/*const transactions = [754, -322, 26, -412, 1, 715, 338, 11, -39, 2];
const arr = transactions.find((v) => v > 0);

console.log(arr);*/

//lesson 5
const arr = [[1, 3, 5], [4, 6], [1, 2], 7, 8, 9];
console.log(arr.flat());



