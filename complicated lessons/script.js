const num = String(266219);

let res = 1;
for (let i = 0; i < num.length; i++) {
  res *= num[i];
}
console.log(res);

let pow = res;
for (let i = 1; i < 3; i++) {
  pow *= res;
}
console.log(pow);

let str = String(pow);
let newStr = str.substr(0, 2);
for (let i = 0; i < newStr.length; i++) {
  console.log(str[i]);
}
