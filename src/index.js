const account1 = {
    userName: "Cecil Ireland",
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.1,
    pin: 1111
};

const account2 = {
    userName: "Amani Salt",
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222
};

const account3 = {
    userName: "Corey Martinez",
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333
};

const account4 = {
    userName: "Kamile Searle",
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444
};

const account5 = {
    userName: "Oliver Avila",
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555
};

const accounts = [account1, account2, account3, account4, account5];

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
/*const arr = [[1, 3, 5], [4, 6], [1, 2], 7, 8, 9];
console.log(arr.flat());*/

//lesson 6
/*const arr = accounts
    .map((v) => v.transactions)
    .flat()
    .reduce((r, v) => r + v, 0);

const arr2 = accounts.flatMap((v) => v.transactions).reduce((r, v) => r + v, 0);

console.log(arr);
console.log(arr2);*/

//lesson 7
const arr = ["Andrey", "Nina", "Valera", "Lena", "Masha", "Petya"];
console.log(arr.sort());

const arr2 = [444, -55, 23, 114, -86, -772, 66, 263, 455, 49];
const arr3 = arr2.sort((x, y) => (x > y ? 0 : -1));
console.log(arr3);