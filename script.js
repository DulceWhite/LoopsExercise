//Loops Exercise

//1.

for (i=1; i<=7; i++){
    console.log(i);
}

console.log(`-.-.-.-.2.-.-.-.-.-.`);
//2. 

for (i = 5; i <= 24; i += 4){
    console.log(i);
}

//3a
const wizards = [
    `Harry Potter`,
    `Hermione Granger`,
    `Ron Weasley`
];

console.log(`-.-.-.-.3b.-.-.-.-.-.`);
//3b
for (identity of wizards){
    console.log(identity);
}


//4a
let harryPotterMovies = 0;

console.log(`-.-.-.-.4b.-.-.-.-.-.`);
//4b
while(harryPotterMovies < 9){
    console.log(harryPotterMovies);
    harryPotterMovies ++;
}

console.log(`-.-.-.-.4c.-.-.-.-.-.`);
//4c
console.log(harryPotterMovies -= 1);

//BONUS

//5a.

const hogwartsHouses = [
    `Gryffindor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
]
console.log(`-.-.-.-.BONUS 5b.-.-.-.-.-.`);
//5b.
for(house of hogwartsHouses){
    for(houseName of house){
        console.log(houseName);
    }
}

//6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
]

console.log(`-.-.-.-.BONUS 6b.-.-.-.-.-.`);

//6b.
console.log(...quote);

//or


//or
//const newVar = [...quote];
//console.log(...newVar);

//this one


for (big of quote){
    console.log(big);
}



//7
console.log(`-.-.-.-.BONUS 7.-.-.-.-.-.`);
for (i=1; i<=25; i++ ) {
    console.log(i);
    if(i% 3 ===0){
        console.log(`Expecto`);
    } else if (i% 5 ===0){
        console.log(`Patronum`);
    } else if(i%3 ===0 && i%5===0){
        console.log(`Expecto Patronum`);
    }
}