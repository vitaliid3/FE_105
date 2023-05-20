// btn.onclick = function () {
//   console.log("click");
// }
//
// btn.onclick = function () {
//   console.log("click 2");
// }

// function show () {
//   console.log("click");
// }
//
// btn.onclick = show;

// btn.addEventListener('click', function () {
//   console.log("click");
// });
//

// let btn = document.querySelector("#btn");
// let items = document.querySelectorAll(".item");
// let i = 0;
//
// btn.addEventListener('click', function (e){
//   for (let item = 0; item < items.length; item++) {
//     items[item].style.backgroundColor = 'unset';
//     if (i === 0) {
//       items[i].style.backgroundColor = 'red';
//     } else if (i === 1) {
//       items[i].style.backgroundColor = 'yellow';
//     } else if (i === 2) {
//       items[i].style.backgroundColor = 'green';
//     }
//   }
//   i++;
//   if (i === 3) {
//     i = 0;
//   }
// });

let col1 = document.querySelector(".tb1");
let col2 = document.querySelector(".tb2");
let col3 = document.querySelector(".tb3");
let tr = document.querySelectorAll("td:first-child");
let a


col1.addEventListener('click', function () {

  for (let i= 0; i < tr.length; i++) {
    console.log(tr[i].innerText)
  }

});

col2.addEventListener('click', function () {
  console.log("click");
});

col3.addEventListener('click', function () {
  console.log("click");
});