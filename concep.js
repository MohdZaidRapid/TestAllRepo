// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function x() {
//   let a = 10;
//   function y() {
//     console.log(a);
//   }
//   a = 11;
//   return y;
// }

// const ans = x();
// ans();

// function Fun(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Fun.prototype.details = function () {
//   console.log(`Hello my name is ${this.name} and ${this.age}`);
// };

// function Fun2(name, age, programming) {
//   Fun.call(this, name, age);
//   this.programming = programming;
// }

// Fun.prototype.details = function () {
//   console.log(`${this.name} ${this.age} ${this.programming}`);
// };

// Fun2.prototype = Fun.prototype;

// const fun1 = new Fun("zaid", 23);
// const fun2 = new Fun("zaid", 23);
// const fun3 = new Fun2("Zaidi", 25, "JS");
// console.log(fun1);
// console.log(fun2);

// fun3.details();

// const promise = new Promise(function (resolve, reject) {
//   if (1 + 5 === 2) {
//     resolve("Your are right");
//   } else {
//     reject("You are wrong");
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promise = new Promise(function (resolve, reject) {
//   if (1 + 1 === 2) {
//     resolve("right");
//   } else {
//     reject("You are wrong");
//   }
// });

// promise
//   .then((res) => {
//     return res;
//   })
//   .then((res1) => {
//     console.log(res1);
//   })
//   .catch((err) => {
//     console.log(err);

//   });

// let arrProm = [
//   new Promise((resolve, reject) => resolve("success")), // 1
//   new Promise((resolve, reject) => reject("success")), // 2
//   new Promise((resolve, reject) => resolve("success")), // 3
// ];

// Promise.all(arrProm)
//   .then((res) => {
//     console.log("success All");
//   })
//   .catch((err) => {
//     console.log("error");
//   });

// let arrProm = [
//   new Promise((resolve, reject) => resolve("success")), // 1
//   new Promise((resolve, reject) => reject("Fail")), // 2
//   new Promise((resolve, reject) => resolve("success")), // 3
// ];

// Promise.allSettled(arrProm)
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//   });

// let arrProm = [
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve("success");
//     }, 1000)
//   ), // 1
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("fail");
//     }, 200)
//   ), // 2
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve("success");
//     }, 3000)
//   ), // 3
// ];

// Promise.race(arrProm)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let arrProm = [
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve("success");
//     }, 1000)
//   ), // 1
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       reject("fail");
//     }, 200)
//   ), // 2
//   new Promise((resolve, reject) =>
//     setTimeout(() => {
//       resolve("success");
//     }, 3000)
//   ), // 3
// ];

// Promise.any(arrProm)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log("error");
//   });

// Strict Mode
// "use strict";
// let a = 10;
// console.log(a);

// let promis = new Promise(function (res, rej) {
//   if (1 + 3 == 2) {
//     res("Right");
//   } else {
//     rej("Wrong");
//   }
// });

// promis
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const PromArray = [
//   new Promise(function (res, rej) {
//     res("hello");
//   }),
//   new Promise(function (res, rej) {
//     rej("error");
//   }),
// ];

// Promise.all(PromArray)
//   .then((res) => console.log(res))
//   .catch((err) => {
//     console.log(err);
//   });

// Es6 operators

// let a = 10;
// let b = 10;

// let c;
// c = a + b;

// function Fun(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.age = age;
//   this.lastName = lastName;
//   this.fullName = function () {
//     console.log(`${this.firstName}  and ${this.lastName} `);
//   };
// }

// Fun.prototype.detail = function () {
//   console.log("details");
// };

// function Fun2(firstName, lastName, age, prog) {
//   Fun.call(this, firstName, lastName, age);
//   this.programming = prog;
// }

// Fun2.prototype = Fun.prototype;

// const fun1 = new Fun("mohd", "zaid", 23);
// const fun2 = new Fun2("mohd", "zaid", 23);

// console.log(fun2.firstName);
// fun2.fullName();

// fun2.detail();

// console.log(fun1.fullName());

// Deep copy shallow copy
const empDetails = {
  name: "Mohd Zaid",
  age: 25,
  expertise: "Sd",
};

// const emp = empDetails;

// emp.name = "zaid";

// console.log(emp);
// console.log(empDetails);

// const emp = {
//   name: empDetails.name,
//   age: empDetails.age,
//   expertise: empDetails.expertise,
// };

// empDetails.name = "zaidiiiii";
// console.log(empDetails);
// console.log(emp);
// const promi = new Promise(function (resolve, reject) {
//   if (1 + 2 == 3) {
//     resolve(3);
//   } else {
//     reject("False");
//   }
// });

// promi
//   .then((res) => {
//     return res + 2;
//   })
//   .then((res) => {
//     return res + 4;
//   })
//   .then((res) => {
//     console.log(res);
//   });

// if (!Math.trunc) {
//   Math.trunc = function (number) {
//     return number < 0 ? Math.ceil(number) : Math.floor(number);
//   };
// }

// function cal() {
//   let a = 10;
//   return function b() {
//     return function c() {
//       console.log(a);
//     };
//   };
// }

// let a = cal();
// let b = a();
// b();

