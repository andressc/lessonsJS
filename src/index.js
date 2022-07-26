const jane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
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
verifyCats(jane2, julia2);