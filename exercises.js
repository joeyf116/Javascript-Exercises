//// Hello Practice ///////
function hello(name) {
    if (name == undefined) {
      console.log("Hello, World!")
    }
    if (name != undefined){
      console.log("Hello " + name)
    }
  }
  
  hello();
  hello("Joey");

  /////// Madlib //////////
function madlib(name, subject) {
    console.log(name + '`s favorite subject is ' + subject)
}

madlib("Joey", "school")

/////// Tip Calculator /////////
const good = .20;
const fair = .15;
const bad = .1;

function tipAmount(billAmount, service) {
     tip = billAmount * service;
     console.log(tip)
}
tipAmount(15, good)

/////// Tip Calculator 2 /////////
const good = .20;
const fair = .15;
const bad = .1;

function totalAmount(billAmount, service) {
     tip = billAmount * service;
     total = billAmount + tip;
     console.log(total);
}
totalAmount(15, bad)

/////// Tip Calculator 3 /////////
const good = .20;
const fair = .15;
const bad = .1;

function splitAmount(billAmount, service, numOfPeople) {
     tip = billAmount * service;
     total = billAmount + tip;
     split = total / numOfPeople; 
     console.log(split);
     
}
splitAmount(35, fair, 3)