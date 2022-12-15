import { useState, useEffect } from 'react';
import { getAllPokemons } from "../api/pokemons";
import { getAllTypes } from "../api/types"
import PokemonCard from "../components/PokemonCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddPokemonModal from '../components/AddPokemonModal';
import Filters from '../components/Filters';
import UpdatePokemon from '../components/UpdatePokemon';
import DeletePokemon from '../components/DeletePokemonModal';

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
        <h1 className="pokemon-list">Pokémon</h1>
        <h2>Filters</h2>
        <Filters
            types={types}
        />
        <div className="pokemon-content">
            {
                pokemons.map((pokemon, key) => {
                    return <div key={key} className="pokemon-block">
                        <PokemonCard
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
        <UpdatePokemon
            types={types}
        />
        <DeletePokemon />
    </div>
}

export default Home;