function getPokemon() {
fetch('https://pokeapi.co/api/v2/pokemon')
	.then(response => response.json())
	.then(data => {
		alert(JSON.stringify(data));
	})
}

