// Creates and Appends Button to DOM
const btn = document.createElement("button");
btn.innerText = "This is a Button created and appended with JavaScript";
document.body.appendChild(btn);
btn.addEventListener('click', randomFact);


// Random Cat Fact Function
async function randomFact() {
    let response = await fetch ("https://cat-fact.herokuapp.com/facts/random")
    let data = await response.json()
    document.body.append(data.text)
}

// randomFact()

const giraffe = function (name) {
    this.icon = ;
    this.name = ;
    
    this.populate = function () {
        if (!this.element) {
            this.element = document.createElement("p")
            this.element.id = name;
            document.body.appendChild(this.element);
        }
    }
})