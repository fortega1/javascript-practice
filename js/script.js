

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


