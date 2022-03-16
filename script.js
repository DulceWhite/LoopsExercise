//Loops Exercise

//1.

for (i=1; i<=7; i++){
    console.log(i);
};

console.log(`-.-.-.-.2.-.-.-.-.-.`);
//2. 

for (i = 5; i <= 24; i += 4){
    console.log(i);
};

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
};


//4a
let harryPotterMovies = 0;

console.log(`-.-.-.-.4b.-.-.-.-.-.`);
//4b
while(harryPotterMovies < 8){
    console.log(harryPotterMovies);//1-7
    harryPotterMovies ++;
};



console.log(`-.-.-.-.4c.-.-.-.-.-.`);
//4c
console.log(harryPotterMovies);//8

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
    //this will make a divider between each house name
    console.log(`.-.--.-.-.-.-.-.-.--.-`);
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
// console.log(...quote);



// let hagrid = quote.join(` `);
// console.log(hagrid);



for (all=0; all<=0; all++){
    console.log(quote.join(` `));
}

//variable to store the values
let magic = ``;
for(i=0; i< quote.length; i++){
    magic += ` ${quote[i]}`//storing and adding the values
}
magic = magic.trim;//getting rid of empty spaces at beginning and end
console.log(magic);

// var all =[];
// for(i=0; i<=quote.length; i++){
//     all = all + [i];
// }
// console.log(all);//01234
//almost got it, jsut need it to store the values in a variable like 


//7

//Inspired by FizzBuzz
console.log(`-.-.-.-.BONUS 7.-.-.-.-.-.`);
for (i=1; i<=25; i++ ) {
    if(i%3 ===0 && i%5===0){
        console.log(`Expecto Patronum`);
    } else if(i% 3 ===0){
    console.log(`Expecto`);
     
    } else if(i% 5 ===0){
        console.log(`Patronum`);
    } else {
        console.log(i);
    }
}


