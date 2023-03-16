// Exercise 1

const Name = ['Sofia','David','Juan'] // Answer 1
// console.log(Name);
Name.push('Sara','Augustin')
Name.shift(0);  // [ 'David', 'Juan', 'Sara', 'Augustin' ] Answer 2
// console.log(Name);
Name.splice(1,0,'Renata');
Name.push('Elena'); // [ 'David', 'Renata', 'Juan', 'Sara', 'Augustin', 'Elena' ] Answer 3
// console.log(Name);

// Exercise 2
let temp = ''
for (let a = 0; a <= 4; a++) {
    let temp = ''
    for(let j = 0; j <= a; j++){
    temp += '*';    
    }
    console.log(temp);
}

// Exercise 3
// odd number
let i = 0
while (i <=100) {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i++
}
// Decrease value
let a = 10.0; 
while (a > 0) { 
  console.log(a); 
  a-= 0.5; 
}
// 3.3
function printSquareBrackets(n) {
    let i = 1;
    while (i <= n) {
      console.log("[" + i + "]");
      i++;
    }
  }
  printSquareBrackets(6); 

// 3.4
function sumOfPositiveIntegers(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
      sum += i;
      i++;
    }
    return sum;
  }
  console.log(sumOfPositiveIntegers(5)); // 15

