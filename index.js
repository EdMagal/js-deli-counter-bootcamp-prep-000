var katzDeli = [];

<<<<<<< HEAD
const takeANumber = (katzDeliLine, person) => `Welcome, ${katzDeliLine[katzDeliLine.push(person)-1]}. You are number ${katzDeliLine.length} in line.`;


const currentLine = (katzDeliLine) => katzDeliLine.length ===  0 ? 
    "The line is currently empty."  :
    `The line is currently: ${katzDeliLine.map((x,y)=>y+1 + ". " + x).join(", ")}`;


const nowServing =  katzDeliLine => katzDeliLine.length === 0 ? 
=======
function takeANumber(katzDeliLine, person){
  katzDeliLine.push(person);
  return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}

function currentLine(katzDeliLine){
  return katzDeliLine.length ===  0 ? 
    "The line is currently empty."  :
    `The line is currently: ${katzDeliLine.map((x,y)=>y+1 + ". " + x).join(", ")}`;
}

var nowServing =  katzDeliLine => katzDeliLine.length === 0 ? 
>>>>>>> 1a20b4b33de4f6ef987008d8180af62650383218
`There is nobody waiting to be served!` :
`Currently serving ${katzDeliLine.shift()}.`;