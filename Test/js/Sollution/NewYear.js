'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
// find the index of the most moved.
let dist = 0;
for (let i=0;i<q.length;i++){
   if(( Math.abs(q[i],i+1))>dist){
       dist=Math.abs(q[i],i+1);
   }   
}
// count bribes
function Node(index, value){
    this.index=index;
    this.value=value;
    this.Isbribed =false;
    this.bribes =0;
}
// new array of objects
var queue = [];
for(let i=0;i<q.length;i++){
    queue.push(new Node(i,q[i]));
}
let noBribes =0;
for(let c of queue){
    
}

if(dist>2){
    //console.log(dist);
console.log("Too chaotic");}
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }
}
