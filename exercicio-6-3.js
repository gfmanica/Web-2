function getPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((data) => data.json())
        .then((data) => console.log(data))
        .catch(() => console.log("Falha ao buscar os dados do pokémon!"));
}

getPokemon("ditto");
