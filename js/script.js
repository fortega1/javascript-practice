// const url = "https://cat-fact.herokuapp.com/facts/random";

// fetch(url)
//     .then((response, reject) => {
//         return response.json();
//     })

//     .then((data) => {
//         // console.log(data);
//         alert(data.text);
//     })


// Async-Await

// async function randomFact() {
//     let response = await fetch ("https://cat-fact.herokuapp.com/facts/random")
//     let data = await response.json()
//     alert(data.text)
// }

// randomFact()

// For specific ranges
// let count = 0;
// for(let i = 0; i < 20; i++){
//     console.log(i);
//     count += i;
//    }
   
   //For objects. Iterates through the object keys
   // More on objects later
//    for(const key in obj) {
//        console.log(key)
//        console.log(obj[key])
//    }
   
   //For arrays
//    for(const item of arr) {
//        console.log(item)
//    }
   // Not really a for loop but iterates through an array like for of
//    months.map(month => `${month} 2021`) // Returns array of altered values if any

   //Interview Question: How to reverse an array
//    for (let index = array.length -1; index >=0; index--){
//        console.log(array[index]);
//    }

   //Similar to for loops
//    array.forEach((element) => {
//        console.log(element);
//    })

//    const altArr = array.map((element) => {
//        return 
//    })

//    while(true) {
    //will produce an infinite loop
    // }
    
    // let currentNumber = 0;
    // while(currentNumber < 100) { // Will continue until currentNumber is 100 or greater
    //   console.log(currentNumber);
    //   currentNumber++; //If you forget this it will be an infinite loop
    // }
    
    
    // Do something before starting the loop. Will repeat what is in do block
    // let response = null;
    // do {
    //   response = prompt("Please enter your name")
    // } while(!response);



    // let count = 0;
    // while (count < 100){
    //     count++;
    //     if (count % 2 !== 0) {
    //         continue;
    //     }
    //     console.log(count);
    // }


// function fizzbuzz() {
//     let count = 0;
//     for(let i = 1; i < 101; i++) {
//         console.log(i);
//         } 
//    }

// fizzbuzz()

let count = 0;
while (count < 100) {
    count++;
    if (count % 3 === 0 && count % 5 === 0) {
        console.log("FizzBuzz");
    } else if (count % 3 === 0 && count % 5 !== 0) {
        console.log("Fizz");
    } else if (count % 5 === 0 && count % 3 !== 0) {
        console.log("Buzz");
    } else {
        console.log(count)
    }
}


// DOM




