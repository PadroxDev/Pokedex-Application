import { useState, useEffect } from 'react';
import { getAll, insert, update, delete_by_name } from "../api/pokemons";
import ListExample from "../components/ListExample";

function Home(props) {
    const [ pokemons, setPokemons ] = useState([]);

    delete_by_name("Dracolosse");

    useEffect(() => {
        const pokemonsFetched = getAll();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.log("Erreur avec votre API :", error.message));
    }, []);

    return <div className="pokemon-list">
        <ListExample />
        <h1>All available pokemons</h1>
        <div className="flex">
            {
                pokemons.map((pokemon, key) => {
                    return <div key={key} className="pokemon-block">
                        <h2>{pokemon.name}</h2>
                    </div>
                })
            }
        </div>
    </div>

}

export default Home;