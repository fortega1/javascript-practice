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

async function randomFact() {
    let response = await fetch ("https://cat-fact.herokuapp.com/facts/random")
    let data = await response.json()
    alert(data.text)
}

randomFact()

// For specific ranges
let count = 0;
for(let i = 0; i < 20; i++){
    console.log(i);
    count += i;
   }
   
   //For objects. Iterates through the object keys
   // More on objects later
   for(const key in obj) {
       console.log(key)
       console.log(obj[key])
   }
   
   //For arrays
   for(const item of arr) {
       console.log(item)
   }
   // Not really a for loop but iterates through an array like for of
   months.map(month => `${month} 2021`) // Returns array of altered values if any

   //Interview Question: How to reverse an array
   for (let index = array.length -1; index >=0; index--){
       console.log(array[index]);
   }