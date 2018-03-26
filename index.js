var katzDeli = [];

const takeANumber = (katzDeliLine, person) => `Welcome, ${katzDeliLine[katzDeliLine.push(person)-1]}. You are number ${katzDeliLine.length} in line.`;


const currentLine = (katzDeliLine) => katzDeliLine.length ===  0 ? 
    "The line is currently empty."  :
    `The line is currently: ${katzDeliLine.map((x,y)=>y+1 + ". " + x).join(", ")}`;


function currentLine(katzDeli) {
  if (katzDeli.length < 1) {
    return "The line is currently empty."
  } else {
    for (i = 0, len = katzDeli.length, text = "The line is currently: ", i < len, i++) {
      text += (i + 1) + ". " + katzDeli[i] + ", ";
    }
  }
  return text
}



var nowServing =  katzDeliLine => katzDeliLine.length === 0 ? 
`There is nobody waiting to be served!` :
`Currently serving ${katzDeliLine.shift()}.`;