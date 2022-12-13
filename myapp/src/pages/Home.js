import { useState, useEffect } from 'react';
import { getAllPokemons, insertPokemon, updatePokemon, deletePokemonByName } from "../api/pokemons";
import { getAllTypes, findTypeByName, deleteTypeByName } from "../api/types"
import PokedexCard from "../components/PokedexCard";
import ListExample from "../components/ListExample";
import Footer from "../components/Footer";
import Lorem from '../components/Lorem';
import AddPokemonModal from '../components/AddPokemonModal';
import Filters from '../components/Filters';

function Home(props) {
    const [ pokemons, setPokemons ] = useState([]);
    const [ pokemonsShow, setPokemonsShow ] = useState([]);
    const [ types, setTypes ] = useState([]);

    useEffect(() => {
        const pokemonsFetched = getAllPokemons();
        pokemonsFetched 
            .then(result => {setPokemons(result);setPokemonsShow(result)})
            .catch(error => console.log("Erreur avec votre API :", error.message));

        const typesFetched = getAllTypes();
        typesFetched
            .then(result => setTypes(result))
            .catch(error => console.log("Erreur avec votre API :", error.message));
    }, []);

    return <div className="pokemon-list">
        <ListExample />
        <h1 className="top-page-spacing">Pokédex</h1>
        <h2>Filters</h2>
        <Filters
            types={types}
            pokemons={pokemons}
            setPokemonsShow={setPokemonsShow}
        />
        <div className="pokedex-content">
            {
                pokemonsShow.map((pokemon, key) => {
                    return <div key={key} className="pokedex-block">
                        <PokedexCard
                            pokemon={pokemon}
                        />
                    </div>
                })
            }
        </div>
        <Lorem />
        <Footer />
        <AddPokemonModal
            types={types}
        />
    </div>
}

export default Home;