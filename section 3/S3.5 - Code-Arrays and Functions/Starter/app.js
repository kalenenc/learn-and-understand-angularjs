var arr = [
  1,
  '2',
  function() {
    console.log(this);
  }
]

arr[2](); // (3) [1, "2", ƒ]
