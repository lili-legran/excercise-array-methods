
function unique(arr) {
  let newStrings = [];
  arr.forEach(el => {
    if (!newStrings.includes(el)) {
      newStrings.push(el);
    }
  });
  return newStrings;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O

