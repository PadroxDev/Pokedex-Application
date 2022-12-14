import { useState, useEffect } from 'react';
import { getAllPokemons, insertPokemon, updatePokemon, deletePokemonByName } from "../api/pokemons";
import { getAllTypes, findTypeByName, deleteTypeByName } from "../api/types"
import PokedexCard from "../components/PokedexCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddPokemonModal from '../components/AddPokemonModal';
import Filters from '../components/Filters';

function Home(props) {
    const [ pokemons, setPokemons ] = useState([]);
    const [ types, setTypes ] = useState([]);

    useEffect(() => {
        const pokemonsFetched = getAllPokemons();
        pokemonsFetched
            .then(result => setPokemons(result))
            .catch(error => console.log("Erreur avec votre API :", error.message));

        const typesFetched = getAllTypes();
        typesFetched
            .then(result => setTypes(result))
            .catch(error => console.log("Erreur avec votre API :", error.message));
    }, []);

    return <div>
        <Navbar />
        <h1 className="pokemon-list">Pokédex</h1>
        <h2>Filters</h2>
        <Filters
            types={types}
        />
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
        <Footer />
        <AddPokemonModal
            types={types}
        />
    </div>
}

export default Home;