
// // function sort012(ary) {
// //     let low = 0
// //     let high = ary.length - 1
// //     let mid = 0;
// //     while (mid <= high) {
// //         if (ary[mid] === 0) {
// //             //swap with low 
// //             const tmp = ary[mid]
// //             ary[mid] = ary[low]
// //             ary[low] = tmp
// //             mid++
// //             low++
// //         } else if (ary[mid] === 1) {
// //             mid++
// //         } else {
// //             //swap with the high 
// //             const tmp = ary[high]
// //             ary[high] = ary[mid]
// //             ary[mid] = tmp
// //             high--
// //         }

// //     }
// //     return ary
// // }


// // //o(n)


// // const result = sort012([0]);
// // console.log(result);
//const result = sort012([0, 1, 2, 0, 1, 2); console.log(result);

//     function sort012(ary) {
//       let low = 0
//       let high = ary.length - 1
//       for (let i = 0; i <= ary.length - 1; i++) {
//         if (ary[i] === 0) {
//           //swap with low 
//           const tmp = ary[low]
//           ary[low] = ary[i]
//           ary[i] = tmp
//           low++
//         }
//         else if(ary[i]===i){
//           //do nothing 
//         }else if(ary[i]===2){
//         	//swap with hight 
//           const tmp=ary[i]
//           ary[i]=ary[high]
//           ary[high]=tmp
//           high--
//         }
//       }
//       return ary
//     }
// const result = sort012([0, 1, 2, 0, 1, 2]); 
// console.log(result);



