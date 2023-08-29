import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokeData, setPokemon] = useState([])
  const [filteredPokeData, setFilterPokeData] = useState([])


  const url = "http://localhost:3001/pokemon"

  useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      setPokemon(data);
      setFilterPokeData(data);
    })}, [])

    const updateSearch= (search) => {
      const filteredPoke = pokeData.filter(poke => poke.name.toLowerCase().includes(search.toLowerCase()))
      setFilterPokeData(filteredPoke)
    }
  

    function newPokemons(newPokemon){
      setPokemon([...pokeData, newPokemon])
    }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm newPokemons={newPokemons} />
      <br />
      <Search updateSearch={updateSearch}/>
      <br />
      <PokemonCollection pokeData={filteredPokeData}/>
    </Container>
  );
}

export default PokemonPage;
