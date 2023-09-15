// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}
// destructivelyAppendCat(`paka`);
// console.log(cats)

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyPrependCat(name){ //declaring function
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
//destructivelyRemoveFirstCat();

function appendCat(X){
    
    let newCat = [...cats];
    newCat.push(X);

    
    return newCat
}

function prependCat(name){
    let xyz = [];

    xyz = [...cats];

    xyz.unshift(name)

    console.log(xyz);
    
    return xyz; 
}

function removeLastCat(){
 let xyz =[...cats];
 xyz.pop()
 //console.log(xyz)
 return xyz;
}
function removeFirstCat(){
let xyz = [...cats]
xyz.shift();
//console.log(xyz)
return xyz;
}
//removeFirstCat();
//