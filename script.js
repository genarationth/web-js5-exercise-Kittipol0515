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
