import { useState, useEffect } from 'react';
import { getAll, insert, update, delete_by_name } from "../api/pokemons";
import PokedexCard from "../components/PokedexCard";
import ListExample from "../components/ListExample";

function Home(props) {
    const [ pokemons, setPokemons ] = useState([]);

    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.log("Erreur avec votre API :", error.message));
    }, []);

    return <div className="pokemon-list">
        <ListExample />
        <h1>All available pokemons</h1>
        <div className="pokedex-content">
            {
                pokemons.map((pokemon, key) => {
                    return <div key={key} className="pokedex-block">
                        <PokedexCard
                            pokemon={pokemon}
                        />
                    </div>
                })
            }
        </div>
    </div>
}

export default Home;