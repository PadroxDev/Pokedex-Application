import "../App.css";
import { useState, useEffect } from 'react';
import { getAllPokemons ,getPokemonByNumber} from "../api/pokemons";
import { getAllTypes } from "../api/types";
import { updatePokedex } from "../api/pokedex";
import { getPokemonByName } from "../api/pokemons";

function StarterPicker(props) {
    let alreadySelected = false;

    const shinyRate = 10;

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }

    const handleClick = async (e, pokemon) => {
        if (alreadySelected) return;

        alreadySelected = true;

        const fetchedPokemon = await getPokemonByName(pokemon);

        const isShiny = getRandomInt(shinyRate) == 0;
        updatePokedex(pokemon, {name:fetchedPokemon.name, number:fetchedPokemon.number, types:fetchedPokemon.types, imgUrl:isShiny ? fetchedPokemon.imgUrlShiny : fetchedPokemon.imgUrl, shiny:isShiny});
    }

    return <div className='starter-choice' >
        <div className="starter" onClick={e => handleClick(e, "Bulbizarre")}><img src = "../img/Bulbizarre.png" alt="Bulbizarre"/></div>
        <div className="starter" onClick={e => handleClick(e, "Salamèche")}><img src = "../img/Salamèche.png" alt="Salamèche"/></div>
        <div className="starter" onClick={e => handleClick(e, "Carapuce")}><img src = "../img/Carapuce.png" alt="Carapuce"/></div>
    </div>
}

export default StarterPicker;