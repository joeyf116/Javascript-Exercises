//// Objects ////
let array = [1,-2,3,-5,8,-9, 10, 15, 30, 27, 96];

function positiveNumbers(arr) {
  return arr.filter(function(value) {
    return value > 0;
  });
}

console.log(positiveNumbers(array))

////////////////////////////////////////////
let array = [1,-2,3,-5,8,-9, 10, 15, 30, 27, 96];

function evenNumbers(arr) {
  return arr.filter(function(value) {
    return value % 2 == 0;
  });
}

console.log(evenNumbers(array))

////////////////////////////////////////////

let array = [1,-2,3,-5,8,-9, 10, 15, 30, 27, 96];

function evenNumbers(arr) {
  return arr.filter(function(value) {
    return value % 2 == 0;
  });
}

console.log(evenNumbers(array))

///////////////////////////////////////////

let array = [1,-2,3,-5,8,-9];

function squareTheNumbers(arr) {
  return arr.map(function(value) {
    return Math.pow(value, 2);
  });
}
console.log(squareTheNumbers(array))

///////////////////////////////////////////

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  
  function below70(arr) {
    return arr.filter(arr => arr.temperature > 70)
  }
  
  console.log(below70(cities))

///////////////////////////////////////////

const cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  
  function cityName(arr) {
    return arr.map(arr => arr.name)
    }
    
console.log(cityName(cities))

///////////////////////////////////////////

const people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
  
  
  function goodJob(arr) {
    return arr.map(arr => console.log("Good Job, " + arr + "!"))
  }
  
  
  goodJob(people)

  ///////////////////////////////////////////

  function sup() {
    return console.log("Hello, World!")
  }
  
  function call3Times(fun) {
    fun();
    fun();
    fun();
  }
  
  call3Times(sup);

///////////////////////////////////////////

function sup() {
    return console.log("Hello, World!")
  }

function callNTimes(times, fun) {
  let count = 0;
  while(count < times) {
    fun();
    count++;
  }
}

callNTimes(5, sup)

